-- Create database
CREATE DATABASE IF NOT EXISTS taskmaster_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE taskmaster_db;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email)
);

-- Create tasks table
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
    status ENUM('pending', 'completed') DEFAULT 'pending',
    due_date DATE NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_status (status),
    INDEX idx_priority (priority),
    INDEX idx_due_date (due_date)
);

-- Insert sample data (optional)
INSERT INTO users (name, email, password) VALUES 
('John Doe', 'john@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'), -- password: password
('Jane Smith', 'jane@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'); -- password: password

INSERT INTO tasks (user_id, title, description, priority, status, due_date) VALUES 
(1, 'Complete project proposal', 'Write and submit the quarterly project proposal', 'high', 'pending', '2024-02-15'),
(1, 'Review team performance', 'Conduct monthly team performance reviews', 'medium', 'pending', '2024-02-10'),
(1, 'Update website content', 'Update the company website with new product information', 'low', 'completed', '2024-01-30'),
(2, 'Prepare presentation', 'Create slides for the client meeting', 'high', 'pending', '2024-02-12'),
(2, 'Database backup', 'Perform weekly database backup', 'medium', 'completed', '2024-02-01');
