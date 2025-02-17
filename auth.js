let users = JSON.parse(localStorage.getItem("users")) || [];

function register() {
    let username = document.getElementById("register-username").value;
    let password = document.getElementById("register-password").value;

    if (users.some(user => user.username === username)) {
        document.getElementById("auth-message").innerText = "Username already exists!";
        return;
    }

    users.push({ username, password, role: "student" });
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("auth-message").innerText = "Registration successful! Please login.";
}

function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = user.role === "admin" ? "dashboard.html" : "course.html";
    } else {
        document.getElementById("auth-message").innerText = "Invalid login credentials!";
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}