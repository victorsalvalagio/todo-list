function adicionarTarefa() {

    let tarefa = document.getElementById("tarefa").value;

    if (tarefa === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let novaTarefa = document.createElement("li");

    novaTarefa.textContent = tarefa;

    let botaoEditar = document.createElement("button");

    botaoEditar.textContent = "Editar";

    botaoEditar.onclick = function() {

        let novoTexto = prompt("Edite sua tarefa:", tarefa);

        if (novoTexto !== null && novoTexto !== "") {
            novaTarefa.firstChild.textContent = novoTexto;
            tarefa = novoTexto;
        }

    };

    let botaoDeletar = document.createElement("button");

    botaoDeletar.textContent = "Deletar";

    botaoDeletar.onclick = function() {
        novaTarefa.remove();
    };

    novaTarefa.appendChild(botaoEditar);
    novaTarefa.appendChild(botaoDeletar);


    document.getElementById("lista").appendChild(novaTarefa);
    document.getElementById("tarefa").value = "";
}

function deletarTudo() {

    document.getElementById("lista").innerHTML = "";

}