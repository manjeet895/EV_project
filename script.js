// Global variables
let currentUser = null
let tasks = []
let currentFilter = "all"

// DOM elements
const authSection = document.getElementById("authSection")
const appSection = document.getElementById("appSection")
const loginForm = document.getElementById("loginFormElement")
const registerForm = document.getElementById("registerFormElement")
const taskForm = document.getElementById("taskForm")
const tasksList = document.getElementById("tasksList")
const loadingSpinner = document.getElementById("loadingSpinner")
const welcomeUser = document.getElementById("welcomeUser")
const logoutBtn = document.getElementById("logoutBtn")

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
  setupEventListeners()
  checkAuthStatus()
})

// Initialize application
function initializeApp() {
  // Set minimum date for due date input
  const today = new Date().toISOString().split("T")[0]
  document.getElementById("taskDueDate").setAttribute("min", today)
}

// Setup event listeners
function setupEventListeners() {
  // Auth tab switching
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      switchAuthTab(this.dataset.tab)
    })
  })

  // Form submissions
  loginForm.addEventListener("submit", handleLogin)
  registerForm.addEventListener("submit", handleRegister)
  taskForm.addEventListener("submit", handleAddTask)

  // Logout
  logoutBtn.addEventListener("click", handleLogout)

  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      setActiveFilter(this.dataset.filter)
      filterTasks(this.dataset.filter)
    })
  })

  // Search functionality
  document.getElementById("searchTasks").addEventListener("input", function () {
    searchTasks(this.value)
  })
}

// Check authentication status
function checkAuthStatus() {
  const userData = localStorage.getItem("taskmaster_user")
  if (userData) {
    currentUser = JSON.parse(userData)
    showApp()
    loadTasks()
  } else {
    showAuth()
  }
}

// Switch authentication tabs
function switchAuthTab(tab) {
  document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"))
  document.querySelectorAll(".auth-form").forEach((form) => form.classList.remove("active"))

  document.querySelector(`[data-tab="${tab}"]`).classList.add("active")
  document.getElementById(`${tab}Form`).classList.add("active")
}

// Handle login
async function handleLogin(e) {
  e.preventDefault()

  const formData = new FormData(loginForm)
  const email = formData.get("email")
  const password = formData.get("password")

  if (!email || !password) {
    showToast("Please fill in all fields", "error")
    return
  }

  showLoading(true)

  try {
    const response = await fetch("api/auth.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "login",
        email: email,
        password: password,
      }),
    })

    const data = await response.json()

    if (data.success) {
      currentUser = data.user
      localStorage.setItem("taskmaster_user", JSON.stringify(currentUser))
      showToast("Login successful!", "success")
      showApp()
      loadTasks()
    } else {
      showToast(data.message || "Login failed", "error")
    }
  } catch (error) {
    console.error("Login error:", error)
    showToast("Network error. Please try again.", "error")
  }

  showLoading(false)
}

// Handle registration
async function handleRegister(e) {
  e.preventDefault()

  const formData = new FormData(registerForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const password = formData.get("password")

  if (!name || !email || !password) {
    showToast("Please fill in all fields", "error")
    return
  }

  if (password.length < 6) {
    showToast("Password must be at least 6 characters long", "error")
    return
  }

  showLoading(true)

  try {
    const response = await fetch("api/auth.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "register",
        name: name,
        email: email,
        password: password,
      }),
    })

    const data = await response.json()

    if (data.success) {
      showToast("Registration successful! Please login.", "success")
      switchAuthTab("login")
      registerForm.reset()
    } else {
      showToast(data.message || "Registration failed", "error")
    }
  } catch (error) {
    console.error("Registration error:", error)
    showToast("Network error. Please try again.", "error")
  }

  showLoading(false)
}

// Handle logout
function handleLogout() {
  currentUser = null
  localStorage.removeItem("taskmaster_user")
  tasks = []
  showAuth()
  showToast("Logged out successfully", "success")
}

// Show authentication section
function showAuth() {
  authSection.style.display = "block"
  appSection.style.display = "none"
  welcomeUser.textContent = "Welcome, Guest"
  logoutBtn.style.display = "none"
}

// Show main application
function showApp() {
  authSection.style.display = "none"
  appSection.style.display = "block"
  welcomeUser.textContent = `Welcome, ${currentUser.name}`
  logoutBtn.style.display = "inline-flex"
}

// Handle add task
async function handleAddTask(e) {
  e.preventDefault()

  const formData = new FormData(taskForm)
  const taskData = {
    title: formData.get("title"),
    description: formData.get("description"),
    priority: formData.get("priority"),
    due_date: formData.get("due_date"),
    user_id: currentUser.id,
  }

  if (!taskData.title.trim()) {
    showToast("Task title is required", "error")
    return
  }

  showLoading(true)

  try {
    const response = await fetch("api/tasks.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "create",
        ...taskData,
      }),
    })

    const data = await response.json()

    if (data.success) {
      showToast("Task added successfully!", "success")
      taskForm.reset()
      loadTasks()
    } else {
      showToast(data.message || "Failed to add task", "error")
    }
  } catch (error) {
    console.error("Add task error:", error)
    showToast("Network error. Please try again.", "error")
  }

  showLoading(false)
}

// Load tasks from server
async function loadTasks() {
  showLoading(true)

  try {
    const response = await fetch(`api/tasks.php?action=get&user_id=${currentUser.id}`)
    const data = await response.json()

    if (data.success) {
      tasks = data.tasks
      displayTasks(tasks)
      updateStats()
    } else {
      showToast(data.message || "Failed to load tasks", "error")
    }
  } catch (error) {
    console.error("Load tasks error:", error)
    showToast("Network error. Please try again.", "error")
  }

  showLoading(false)
}

// Display tasks
function displayTasks(tasksToShow) {
  if (tasksToShow.length === 0) {
    tasksList.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #666;">
                <i class="fas fa-tasks" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.3;"></i>
                <h3>No tasks found</h3>
                <p>Add your first task to get started!</p>
            </div>
        `
    return
  }

  tasksList.innerHTML = tasksToShow
    .map(
      (task) => `
        <div class="task-item ${task.status} ${task.priority}-priority" data-task-id="${task.id}">
            <div class="task-header">
                <div>
                    <div class="task-title">${escapeHtml(task.title)}</div>
                    <span class="task-priority priority-${task.priority}">${task.priority}</span>
                </div>
            </div>
            ${task.description ? `<div class="task-description">${escapeHtml(task.description)}</div>` : ""}
            <div class="task-meta">
                <span><i class="fas fa-calendar"></i> Created: ${formatDate(task.created_at)}</span>
                ${task.due_date ? `<span><i class="fas fa-clock"></i> Due: ${formatDate(task.due_date)}</span>` : ""}
            </div>
            <div class="task-actions">
                ${
                  task.status === "pending"
                    ? `<button class="btn btn-success" onclick="toggleTaskStatus(${task.id}, 'completed')">
                        <i class="fas fa-check"></i> Complete
                    </button>`
                    : `<button class="btn btn-warning" onclick="toggleTaskStatus(${task.id}, 'pending')">
                        <i class="fas fa-undo"></i> Reopen
                    </button>`
                }
                <button class="btn btn-danger" onclick="deleteTask(${task.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `,
    )
    .join("")
}

// Toggle task status
async function toggleTaskStatus(taskId, newStatus) {
  showLoading(true)

  try {
    const response = await fetch("api/tasks.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "update_status",
        task_id: taskId,
        status: newStatus,
      }),
    })

    const data = await response.json()

    if (data.success) {
      showToast(`Task ${newStatus}!`, "success")
      loadTasks()
    } else {
      showToast(data.message || "Failed to update task", "error")
    }
  } catch (error) {
    console.error("Update task error:", error)
    showToast("Network error. Please try again.", "error")
  }

  showLoading(false)
}

// Delete task
async function deleteTask(taskId) {
  if (!confirm("Are you sure you want to delete this task?")) {
    return
  }

  showLoading(true)

  try {
    const response = await fetch("api/tasks.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "delete",
        task_id: taskId,
      }),
    })

    const data = await response.json()

    if (data.success) {
      showToast("Task deleted successfully!", "success")
      loadTasks()
    } else {
      showToast(data.message || "Failed to delete task", "error")
    }
  } catch (error) {
    console.error("Delete task error:", error)
    showToast("Network error. Please try again.", "error")
  }

  showLoading(false)
}

// Filter tasks
function filterTasks(filter) {
  currentFilter = filter
  let filteredTasks = tasks

  switch (filter) {
    case "pending":
      filteredTasks = tasks.filter((task) => task.status === "pending")
      break
    case "completed":
      filteredTasks = tasks.filter((task) => task.status === "completed")
      break
    case "high":
      filteredTasks = tasks.filter((task) => task.priority === "high")
      break
    case "all":
    default:
      filteredTasks = tasks
      break
  }

  displayTasks(filteredTasks)
}

// Search tasks
function searchTasks(query) {
  if (!query.trim()) {
    filterTasks(currentFilter)
    return
  }

  const searchResults = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(query.toLowerCase()) ||
      (task.description && task.description.toLowerCase().includes(query.toLowerCase())),
  )

  displayTasks(searchResults)
}

// Set active filter button
function setActiveFilter(filter) {
  document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"))
  document.querySelector(`[data-filter="${filter}"]`).classList.add("active")
}

// Update statistics
function updateStats() {
  const totalTasks = tasks.length
  const pendingTasks = tasks.filter((task) => task.status === "pending").length
  const completedTasks = tasks.filter((task) => task.status === "completed").length

  document.getElementById("totalTasks").textContent = totalTasks
  document.getElementById("pendingTasks").textContent = pendingTasks
  document.getElementById("completedTasks").textContent = completedTasks
}

// Utility functions
function showLoading(show) {
  loadingSpinner.style.display = show ? "flex" : "none"
}

function showToast(message, type = "info") {
  const toast = document.createElement("div")
  toast.className = `toast ${type}`
  toast.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"}"></i>
            <span>${message}</span>
        </div>
    `

  document.getElementById("toastContainer").appendChild(toast)

  setTimeout(() => {
    toast.remove()
  }, 5000)
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

function escapeHtml(text) {
  const div = document.createElement("div")
  div.textContent = text
  return div.innerHTML
}
