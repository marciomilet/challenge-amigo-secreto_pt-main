//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
var amigos = [];
function adicionarAmigo() {
    const idamigo = document.getElementById("amigo").value
    amigos.push(idamigo)
    console.log(amigos)
}

function valorAleatorio(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min+1)) + min;
}

function sortearAmigo() {
    index = valorAleatorio(0, amigos.length)
    console.log(index)
}