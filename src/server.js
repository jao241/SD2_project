const { WebSocketServer } = require("ws");
const { limpaConsole, adicionaQuebraLinha, removeCaractere, verificaTecla } = require("./funcoes");

const server = new WebSocketServer({
    port: 9999,
});

let texto = "";

server.on("listening", () => {
    console.log("Servidor rodando...");
});

server.on("connection", (ws) => {
    
    ws.addEventListener("message", (message) => {
        const tecla = message.data;
        limpaConsole();

        salvaTeclaDigitada(tecla);

        console.log(texto);
    });

});

function salvaTeclaDigitada(tecla) {
    if(tecla == "Enter") {
        texto += adicionaQuebraLinha();

        return;
    }

    if(tecla == "Backspace") {
        texto = removeCaractere(texto);
        
        return;
    }

    const teclaEspecial = verificaTecla(tecla);

    if(!teclaEspecial)
        texto += tecla;
}