const endereco = "ws://localhost:9999";
let socket = geraSocket(endereco);

function enviaTeclaDigitada(event) {
    const temConexao = validaEstadoConexao(socket);

    if(temConexao)
        socket.send(event.key);
    else
        {
            alert("Falha ao tentar se conectar ao socket! Reconectando...");
            socket = geraSocket(endereco);
        }
}

function geraSocket(endereco) {
    const socket = new WebSocket(endereco);
    return socket;
}

function validaEstadoConexao(socket) {
    const estadoDaConexao = socket.readyState;
    if(estadoDaConexao == 1) return true;
    else return false;
}

document.body.onkeydown = enviaTeclaDigitada;