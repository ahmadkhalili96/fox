document.getElementById("chatbot-btn").addEventListener("click", function () {
    document.getElementById("chatbot").style.display = "block";
});

document.getElementById("close-chat").addEventListener("click", function () {
    document.getElementById("chatbot").style.display = "none";
});

document.getElementById("send-btn").addEventListener("click", function () {
    sendMessage();
});

document.getElementById("chat-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let inputField = document.getElementById("chat-input");
    let message = inputField.value.trim();
    if (message === "") return;

    addMessage(message, "user");

    let response = getChatbotResponse(message);
    setTimeout(() => addMessage(response, "bot"), 1000);

    inputField.value = "";
}

function addMessage(text, sender) {
    let chatBody = document.getElementById("chat-body");
    let messageElement = document.createElement("p");
    messageElement.classList.add(sender + "-message");
    messageElement.innerText = text;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// قاعدة بيانات للأسئلة الشائعة
const faq = {
    "what is python?": "Python is a popular programming language used for web development, data science, and automation.",
    "how do i install python?": "You can download Python from the official website: https://www.python.org/downloads/",
    "what is a variable in python?": "A variable in Python is used to store data. Example: x = 5",
    "how can i learn python faster?": "Practice regularly, build small projects, and use platforms like Codecademy or Coursera."
};

function getChatbotResponse(question) {
    let lowerCaseQuestion = question.toLowerCase();
    return faq[lowerCaseQuestion] || "I'm not sure about that. Try searching online!";
}