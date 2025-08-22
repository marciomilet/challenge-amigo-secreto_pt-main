//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
var amigos = [];
function adicionarAmigo(nome) {
    const nomeAmigo = nome
    amigos.push(nomeAmigo)
    console.log(amigos)
}

function valorAleatorio(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min)) + min;
}

function sortearAmigo() {
    const index = valorAleatorio(0, amigos.length)
    console.log(index)
    alert("seu amigo secreto é:"+amigos[index])
}