const http = require("http");
const WebSocket = require("ws");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Local Chat Server");
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        // Broadcast the message to all connected clients.
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

server.listen(8080, () => {
    console.log("Server is running on port 8080");
});