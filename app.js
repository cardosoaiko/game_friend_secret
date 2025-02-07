let amigos = [];
let amigosRestantes = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar.");
        return;
    }
    
    if (!amigos.includes(nome)) {
        amigos.push(nome);
        amigosRestantes.push(nome);
        atualizarLista();
        input.value = "";
        input.focus();
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigosRestantes.length === 0) return;
    
    const indice = Math.floor(Math.random() * amigosRestantes.length);
    const sorteado = amigosRestantes.splice(indice, 1)[0];
    
    document.getElementById("resultado").innerHTML = `<li>O amigo secreto sorteado é: ${sorteado}</li>`;
}
