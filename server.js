const { WebSocketServer } = require("ws");

const server = new WebSocketServer({
    port: 9999
});

server.on("listening", () => {
    console.log("Servidor rodando...");
});

server.on("connection", (ws) => {
    
    ws.addEventListener("message", (message) => {
        console.clear();
        console.log(message);
    });

});