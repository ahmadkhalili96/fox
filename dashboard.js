if (!localStorage.getItem("loggedInUser")) {
    window.location.href = "login.html";
}

let courses = JSON.parse(localStorage.getItem("courses")) || [];
let students = JSON.parse(localStorage.getItem("users")) || [];

function addCourse() {
    let courseName = document.getElementById("course-name").value;
    if (!courseName) return;

    courses.push(courseName);
    localStorage.setItem("courses", JSON.stringify(courses));
    displayCourses();
}

function displayCourses() {
    let courseList = document.getElementById("course-list");
    courseList.innerHTML = "";
    courses.forEach(course => {
        let li = document.createElement("li");
        li.textContent = course;
        courseList.appendChild(li);
    });
}

function displayStudents() {
    let studentList = document.getElementById("student-list");
    studentList.innerHTML = "";
    students.filter(user => user.role === "student").forEach(student => {
        let li = document.createElement("li");
        li.textContent = student.username;
        studentList.appendChild(li);
    });
}

displayCourses();
displayStudents();