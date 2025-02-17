// Add new post
document.getElementById("new-post-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;

    if (title && content) {
        const postSection = document.getElementById("posts");
        const newPost = document.createElement("div");
        newPost.classList.add("post");

        newPost.innerHTML = `
            <h4>${title}</h4>
            <p>Posted just now</p>
            <p>${content}</p>
            <div class="actions">
                <button class="like-btn">👍 <span class="like-count">0</span></button>
                <button class="dislike-btn">👎 <span class="dislike-count">0</span></button>
                <button class="reply-btn">Reply</button>
            </div>
            <div class="replies">
                <form class="reply-form">
                    <textarea placeholder="Write a reply..." required></textarea>
                    <button type="submit">Reply</button>
                </form>
                <div class="reply-list"></div>
            </div>
        `;

        postSection.insertBefore(newPost, postSection.firstChild);
        document.getElementById("post-title").value = "";
        document.getElementById("post-content").value = "";
    }
});

// Add like and dislike functionality
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("like-btn")) {
        let count = event.target.querySelector(".like-count");
        count.textContent = parseInt(count.textContent) + 1;
    }

    if (event.target.classList.contains("dislike-btn")) {
        let count = event.target.querySelector(".dislike-count");
        count.textContent = parseInt(count.textContent) + 1;
    }
});

// Add reply functionality
document.addEventListener("submit", function (event) {
    if (event.target.classList.contains("reply-form")) {
        event.preventDefault();
        const replyInput = event.target.querySelector("textarea");
        const replyList = event.target.nextElementSibling;

        if (replyInput.value.trim() !== "") {
            const newReply = document.createElement("p");
            newReply.innerHTML = `<strong>You:</strong> ${replyInput.value}`;
            replyList.appendChild(newReply);
            replyInput.value = "";
        }
    }
});