const { WebSocketServer } = require("ws");

const server = new WebSocketServer({
    port: 9999
});

let texto = "";

server.on("listening", () => {
    console.log("Servidor rodando...");
});

server.on("connection", (ws) => {
    
    ws.addEventListener("message", (message) => {
        console.clear();
        texto += message.data;
        console.log(texto);
    });

});