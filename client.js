document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("send-button");

    const addMessage = (message) => {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
    };

    // You can customize how you identify users within the same Wi-Fi network.
    const userId = Math.random().toString(36).substring(7); 

    // WebSocket connection to the server.
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
        addMessage("Connected to the chat.");
    };

    socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        addMessage(`${message.userId}: ${message.text}`);
    };

    socket.onclose = () => {
        addMessage("Connection closed.");
    };

    sendButton.addEventListener("click", () => {
        const text = messageInput.value;
        if (text.trim() !== "") {
            const message = { userId, text };
            socket.send(JSON.stringify(message));
            addMessage(`You: ${text}`);
            messageInput.value = "";
        }
    });
});