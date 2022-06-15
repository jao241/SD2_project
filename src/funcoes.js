const teclasProibidas = require("./teclasProibidas");

function limpaConsole() {
    console.clear();
}

function adicionaQuebraLinha() {
    return "\n";
}

function removeCaractere(texto) {
    const ultimaPosicaoTexto = texto.length -1;
    const textoDividido = Array.from(texto);
    textoDividido.pop(ultimaPosicaoTexto);

    return textoDividido.join("");
}

function verificaTecla(tecla) {
    for(let teclaProibida of teclasProibidas) {
        if(tecla == teclaProibida)
            return true;
    }
}

module.exports = {
    limpaConsole,
    adicionaQuebraLinha,
    removeCaractere,
    verificaTecla,
}