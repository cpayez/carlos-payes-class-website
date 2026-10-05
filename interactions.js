const button = document.querySelector("#button");
const message = document.querySelector("#message");

function toggleInteraction() {
    document.body.classList.toggle("dark-theme");

    if (message.textContent === "Hello") {
        message.innerHTML = '<img src="Sample 1.jpg" alt="Image">';
    } else {
        message.textContent = "Hello";
    }
}

button.addEventListener("click", toggleInteraction);
