const { WebSocketServer } = require("ws");

const server = new WebSocketServer({
    port: 9999
});

let texto = "";

const teclasProibidas = [
    "Escape",
    "Shift",
    "Tab",
    "CapsLock",
    "Control",
    "ContextMenu",
    "Alt",
    "ScrollLock",
    "pause",
    "PageUp",
    "Home",
    "Insert",
    "Delete",
    "End",
    "PageDown",
    "ArrowUp",
    "ArrowRight",
    "Arrowdown",
    "ArrowLeft",
    "NumLock",
    "Clear",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "AltGraph"
]

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

function limpaConsole() {
    console.clear();
}

function salvaTeclaDigitada(tecla) {
    if(tecla == "Enter") {
        adicionaQuebraLinha();

        return;
    }

    if(tecla == "Backspace") {
        removeCaractere();
        
        return;
    }

    for(let teclaProibida of teclasProibidas) {
        if(tecla == teclaProibida)
            return;
    }

    texto += tecla;
}

function adicionaQuebraLinha() {
    texto += "\n";
}

function removeCaractere() {
    const ultimaPosicaoTexto = texto.length -1;
    const textoDividido = Array.from(texto);
    textoDividido.pop(ultimaPosicaoTexto);

    texto = textoDividido.join("");
}