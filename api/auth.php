<?php
require_once 'config.php';

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['action'])) {
    sendResponse(false, 'Invalid request');
}

$pdo = getDBConnection();
$action = $input['action'];

switch ($action) {
    case 'register':
        handleRegister($pdo, $input);
        break;
    
    case 'login':
        handleLogin($pdo, $input);
        break;
    
    default:
        sendResponse(false, 'Invalid action');
}

function handleRegister($pdo, $input) {
    // Validate input
    if (empty($input['name']) || empty($input['email']) || empty($input['password'])) {
        sendResponse(false, 'All fields are required');
    }
    
    $name = trim($input['name']);
    $email = trim($input['email']);
    $password = $input['password'];
    
    // Validate email
    if (!validateEmail($email)) {
        sendResponse(false, 'Invalid email format');
    }
    
    // Validate password length
    if (strlen($password) < 6) {
        sendResponse(false, 'Password must be at least 6 characters long');
    }
    
    try {
        // Check if email already exists
        $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
        $stmt->execute([$email]);
        
        if ($stmt->fetch()) {
            sendResponse(false, 'Email already registered');
        }
        
        // Create new user
        $hashedPassword = hashPassword($password);
        $stmt = $pdo->prepare("
            INSERT INTO users (name, email, password, created_at) 
            VALUES (?, ?, ?, NOW())
        ");
        
        $stmt->execute([$name, $email, $hashedPassword]);
        
        sendResponse(true, 'Registration successful');
        
    } catch (PDOException $e) {
        error_log("Registration error: " . $e->getMessage());
        sendResponse(false, 'Registration failed. Please try again.');
    }
}

function handleLogin($pdo, $input) {
    // Validate input
    if (empty($input['email']) || empty($input['password'])) {
        sendResponse(false, 'Email and password are required');
    }
    
    $email = trim($input['email']);
    $password = $input['password'];
    
    try {
        // Get user by email
        $stmt = $pdo->prepare("SELECT id, name, email, password FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch();
        
        if (!$user || !verifyPassword($password, $user['password'])) {
            sendResponse(false, 'Invalid email or password');
        }
        
        // Remove password from response
        unset($user['password']);
        
        sendResponse(true, 'Login successful', ['user' => $user]);
        
    } catch (PDOException $e) {
        error_log("Login error: " . $e->getMessage());
        sendResponse(false, 'Login failed. Please try again.');
    }
}
?>
