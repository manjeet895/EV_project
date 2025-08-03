# TaskMaster - Complete Web Development Project

A comprehensive task management system built with HTML, CSS, JavaScript, PHP, and MySQL database.

## 🚀 Features

### Frontend Features
- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean, professional interface with animations
- **Real-time Updates**: Dynamic content loading without page refresh
- **Interactive Elements**: Smooth transitions and hover effects
- **Toast Notifications**: User-friendly feedback system

### Backend Features
- **User Authentication**: Secure login and registration system
- **Password Security**: Bcrypt password hashing
- **RESTful API**: Clean API endpoints for all operations
- **Database Security**: Prepared statements to prevent SQL injection
- **Error Handling**: Comprehensive error handling and logging

### Task Management Features
- **CRUD Operations**: Create, Read, Update, Delete tasks
- **Task Filtering**: Filter by status, priority, or view all
- **Search Functionality**: Search tasks by title or description
- **Priority Levels**: Low, Medium, High priority tasks
- **Due Dates**: Set and track task deadlines
- **Status Tracking**: Pending and Completed task states
- **Statistics Dashboard**: Overview of task statistics

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: PHP 7.4+
- **Database**: MySQL 5.7+
- **Styling**: Custom CSS with Flexbox and Grid
- **Icons**: Font Awesome 6
- **Security**: Password hashing, SQL injection prevention

## 📋 Installation Instructions

### Prerequisites
- Web server (Apache/Nginx)
- PHP 7.4 or higher
- MySQL 5.7 or higher
- Modern web browser

### Setup Steps

1. **Clone/Download the project files**
   \`\`\`bash
   # Place all files in your web server directory
   # Example: /var/www/html/taskmaster/ or C:\xampp\htdocs\taskmaster\
   \`\`\`

2. **Database Setup**
   \`\`\`sql
   -- Import the database schema
   mysql -u root -p < database/schema.sql
   
   -- Or manually create database and run the SQL commands
   \`\`\`

3. **Configure Database Connection**
   \`\`\`php
   // Edit api/config.php with your database credentials
   define('DB_HOST', 'localhost');
   define('DB_USER', 'your_username');
   define('DB_PASS', 'your_password');
   define('DB_NAME', 'taskmaster_db');
   \`\`\`

4. **Set Permissions** (Linux/Mac)
   \`\`\`bash
   chmod 755 api/
   chmod 644 api/*.php
   \`\`\`

5. **Access the Application**
   \`\`\`
   http://localhost/taskmaster/
   # or your domain/subdirectory
   \`\`\`

## 🗄️ Database Schema

### Users Table
\`\`\`sql
- id (Primary Key)
- name (VARCHAR 100)
- email (VARCHAR 150, Unique)
- password (VARCHAR 255, Hashed)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
\`\`\`

### Tasks Table
\`\`\`sql
- id (Primary Key)
- user_id (Foreign Key)
- title (VARCHAR 255)
- description (TEXT)
- priority (ENUM: low, medium, high)
- status (ENUM: pending, completed)
- due_date (DATE)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
\`\`\`

## 🔧 API Endpoints

### Authentication
- `POST /api/auth.php` - Login/Register
  \`\`\`json
  // Login
  {
    "action": "login",
    "email": "user@example.com",
    "password": "password"
  }
  
  // Register
  {
    "action": "register",
    "name": "John Doe",
    "email": "user@example.com",
    "password": "password"
  }
  \`\`\`

### Tasks
- `GET /api/tasks.php?user_id=1` - Get all tasks
- `POST /api/tasks.php` - Create/Update/Delete tasks
  \`\`\`json
  // Create Task
  {
    "action": "create",
    "user_id": 1,
    "title": "Task Title",
    "description": "Task Description",
    "priority": "high",
    "due_date": "2024-02-15"
  }
  
  // Update Status
  {
    "action": "update_status",
    "task_id": 1,
    "status": "completed"
  }
  
  // Delete Task
  {
    "action": "delete",
    "task_id": 1
  }
  \`\`\`

## 🎨 CSS Features

- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Variables**: Consistent theming
- **Animations**: Smooth transitions and keyframe animations
- **Responsive Design**: Mobile-first approach
- **Custom Components**: Reusable UI components

## 📱 JavaScript Features

- **ES6+ Syntax**: Modern JavaScript features
- **Async/Await**: Clean asynchronous code
- **Local Storage**: Client-side data persistence
- **Event Delegation**: Efficient event handling
- **Error Handling**: Comprehensive error management

## 🔒 Security Features

- **Password Hashing**: Bcrypt for secure password storage
- **SQL Injection Prevention**: Prepared statements
- **XSS Protection**: HTML escaping
- **CORS Headers**: Cross-origin resource sharing
- **Input Validation**: Server and client-side validation

## 🚀 Performance Optimizations

- **Efficient Queries**: Optimized database queries with indexes
- **Minimal HTTP Requests**: Combined API calls
- **CSS Optimization**: Efficient selectors and minimal reflows
- **JavaScript Optimization**: Event delegation and efficient DOM manipulation

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check database credentials in `api/config.php`
   - Ensure MySQL service is running
   - Verify database exists

2. **404 Errors on API Calls**
   - Check file permissions
   - Verify web server configuration
   - Ensure mod_rewrite is enabled (Apache)

3. **Login/Registration Not Working**
   - Check browser console for JavaScript errors
   - Verify API endpoints are accessible
   - Check database table structure

## 📈 Future Enhancements

- Task categories and tags
- File attachments for tasks
- Team collaboration features
- Email notifications
- Calendar integration
- Mobile app version
- Advanced reporting and analytics

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a comprehensive web development demonstration project showcasing HTML, CSS, JavaScript, PHP, and MySQL integration.
