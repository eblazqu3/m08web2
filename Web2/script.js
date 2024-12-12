document.getElementById("action-button").addEventListener("click", function () {
    const message = document.getElementById("message");

    // Show the message with animation
    message.classList.remove("hidden");
    message.classList.add("visible");
});
