<?php
require_once 'config.php';

$pdo = getDBConnection();

// Handle GET requests
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    handleGetTasks($pdo);
} else {
    // Handle POST requests
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input || !isset($input['action'])) {
        sendResponse(false, 'Invalid request');
    }
    
    $action = $input['action'];
    
    switch ($action) {
        case 'create':
            handleCreateTask($pdo, $input);
            break;
        
        case 'update_status':
            handleUpdateTaskStatus($pdo, $input);
            break;
        
        case 'delete':
            handleDeleteTask($pdo, $input);
            break;
        
        default:
            sendResponse(false, 'Invalid action');
    }
}

function handleGetTasks($pdo) {
    if (!isset($_GET['user_id'])) {
        sendResponse(false, 'User ID is required');
    }
    
    $userId = $_GET['user_id'];
    
    try {
        $stmt = $pdo->prepare("
            SELECT id, title, description, priority, status, due_date, created_at, updated_at
            FROM tasks 
            WHERE user_id = ? 
            ORDER BY 
                CASE 
                    WHEN status = 'pending' THEN 0 
                    ELSE 1 
                END,
                CASE priority 
                    WHEN 'high' THEN 0 
                    WHEN 'medium' THEN 1 
                    WHEN 'low' THEN 2 
                END,
                created_at DESC
        ");
        
        $stmt->execute([$userId]);
        $tasks = $stmt->fetchAll();
        
        sendResponse(true, 'Tasks retrieved successfully', ['tasks' => $tasks]);
        
    } catch (PDOException $e) {
        error_log("Get tasks error: " . $e->getMessage());
        sendResponse(false, 'Failed to retrieve tasks');
    }
}

function handleCreateTask($pdo, $input) {
    // Validate input
    if (empty($input['title']) || empty($input['user_id'])) {
        sendResponse(false, 'Title and user ID are required');
    }
    
    $title = trim($input['title']);
    $description = isset($input['description']) ? trim($input['description']) : '';
    $priority = isset($input['priority']) ? $input['priority'] : 'medium';
    $dueDate = isset($input['due_date']) && !empty($input['due_date']) ? $input['due_date'] : null;
    $userId = $input['user_id'];
    
    // Validate priority
    if (!in_array($priority, ['low', 'medium', 'high'])) {
        $priority = 'medium';
    }
    
    try {
        $stmt = $pdo->prepare("
            INSERT INTO tasks (user_id, title, description, priority, due_date, status, created_at, updated_at) 
            VALUES (?, ?, ?, ?, ?, 'pending', NOW(), NOW())
        ");
        
        $stmt->execute([$userId, $title, $description, $priority, $dueDate]);
        
        $taskId = $pdo->lastInsertId();
        
        sendResponse(true, 'Task created successfully', ['task_id' => $taskId]);
        
    } catch (PDOException $e) {
        error_log("Create task error: " . $e->getMessage());
        sendResponse(false, 'Failed to create task');
    }
}

function handleUpdateTaskStatus($pdo, $input) {
    // Validate input
    if (empty($input['task_id']) || empty($input['status'])) {
        sendResponse(false, 'Task ID and status are required');
    }
    
    $taskId = $input['task_id'];
    $status = $input['status'];
    
    // Validate status
    if (!in_array($status, ['pending', 'completed'])) {
        sendResponse(false, 'Invalid status');
    }
    
    try {
        $stmt = $pdo->prepare("
            UPDATE tasks 
            SET status = ?, updated_at = NOW() 
            WHERE id = ?
        ");
        
        $result = $stmt->execute([$status, $taskId]);
        
        if ($stmt->rowCount() === 0) {
            sendResponse(false, 'Task not found');
        }
        
        sendResponse(true, 'Task status updated successfully');
        
    } catch (PDOException $e) {
        error_log("Update task status error: " . $e->getMessage());
        sendResponse(false, 'Failed to update task status');
    }
}

function handleDeleteTask($pdo, $input) {
    // Validate input
    if (empty($input['task_id'])) {
        sendResponse(false, 'Task ID is required');
    }
    
    $taskId = $input['task_id'];
    
    try {
        $stmt = $pdo->prepare("DELETE FROM tasks WHERE id = ?");
        $result = $stmt->execute([$taskId]);
        
        if ($stmt->rowCount() === 0) {
            sendResponse(false, 'Task not found');
        }
        
        sendResponse(true, 'Task deleted successfully');
        
    } catch (PDOException $e) {
        error_log("Delete task error: " . $e->getMessage());
        sendResponse(false, 'Failed to delete task');
    }
}
?>
