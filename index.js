document.getElementById("search-btn").addEventListener("click", function () {
    let query = document.getElementById("search-input").value.toLowerCase();
    let categoryFilter = document.getElementById("category-filter").value;
    let sortOrder = document.getElementById("sort-order").value;
    let resultsContainer = document.getElementById("search-results");

    let courses = [
        { title: "Python for Beginners", category: "Programming", date: "2024-05-10" },
        { title: "Web Development with HTML & CSS", category: "Web Development", date: "2024-06-01" },
        { title: "Data Science with Python", category: "Data Science", date: "2024-04-15" }
    ];

    let filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(query) &&
        (categoryFilter === "all" || course.category === categoryFilter)
    );

    if (sortOrder === "name") {
        filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "newest") {
        filteredCourses.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    resultsContainer.innerHTML = "";
    filteredCourses.forEach(course => {
        let courseElement = document.createElement("div");
        courseElement.classList.add("course-result");
        courseElement.innerHTML = `<h4>${course.title}</h4><p>Category: ${course.category} | Date: ${course.date}</p>`;
        resultsContainer.appendChild(courseElement);
    });
});


// Toggle the chatbot visibility
function toggleChatbot() {
    const chatbot = document.getElementById("chatbot-section");
    chatbot.style.display = chatbot.style.display === "none" || chatbot.style.display === "" ? "flex" : "none";
}

// Function to send a message and get a response
function sendMessage() {
    const userMessage = document.getElementById("chat-input").value;
    if (!userMessage) return;

    // Display user's message
    addMessage(userMessage, "user");

    // Respond to the message (using AI logic or pre-defined responses)
    let botResponse = generateResponse(userMessage);
    addMessage(botResponse, "bot");

    // Clear input field
    document.getElementById("chat-input").value = "";
}

// Add message to the chatbot window
function addMessage(message, sender) {
    const messagesContainer = document.getElementById("chatbot-messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(sender);
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);

    // Scroll to the bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Generate a response based on the user's input
function generateResponse(message) {
    // Example of a basic rule-based response (can be expanded to AI-based)
    if (message.toLowerCase().includes("course")) {
        return "I can help you find courses. What topic are you interested in?";
    } else if (message.toLowerCase().includes("python")) {
        return "We have several courses on Python programming. Would you like to check them out?";
    } else if (message.toLowerCase().includes("ai")) {
        return "I can provide details about AI-related courses. Would you like to learn more?";
    } else {
        return "I'm not sure about that. Can you ask something related to courses?";
    }
}


// Initialize chatbot visibility when page loads
window.onload = function() {
    toggleChatbot();
};


document.addEventListener("DOMContentLoaded", function () {
    const forumPostsContainer = document.getElementById("forum-posts");

    // بيانات تجريبية - يمكن استبدالها بجلب البيانات من قاعدة بيانات
    const latestPosts = [
        { title: "Best resources for Data Science?", user: "Jane Smith", time: "2 hours ago" },
        { title: "How to stay motivated while studying?", user: "Michael Brown", time: "4 hours ago" },
        { title: "Python vs JavaScript for beginners?", user: "Emily Davis", time: "6 hours ago" }
    ];

    forumPostsContainer.innerHTML = ""; // تفريغ المحتوى الافتراضي

    latestPosts.forEach(post => {
        let postElement = document.createElement("div");
        postElement.classList.add("post-preview");
        postElement.innerHTML = `<h4>${post.title}</h4><p>Posted by ${post.user} - ${post.time}</p>`;
        forumPostsContainer.appendChild(postElement);
    });
});