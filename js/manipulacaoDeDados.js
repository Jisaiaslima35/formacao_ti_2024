const prompt = require("prompt-sync")()
const contatos = []

// funçao adcionarContato
function adicionarContato(){
    const nome = prompt('digite seu nome: ')
    const telefone = prompt('digite seu telefone: ')
    const email = prompt('digite seu email: ')
    const novoContato ={ nome,telefone,email}
    contatos.push(novoContato)
    console.log('contato add com sucesso')

}
// funçao pesquisarContato
function pesquisarContato(){
    const nome = prompt('qual nome a pesquisar? ')
    const contato = contatos.find(contato => contato.nome === nome)
    if (contato){
        console.log('contato encontrado')
        console.log(contato)
    }
    else{
        console.log('contato nao encontrado')
    }
}
// funçao editar contato
function editarContato() {
    const nome = prompt("Digite o nome do contato que deseja editar: ");
    const contato = contatos.find(contato => contato.nome === nome);
    if (contato) {
        const novoTelefone = prompt("Digite o novo telefone do contato: ");
        const novoEmail = prompt("Digite o novo email do contato: ");
        contato.telefone = novoTelefone;
        contato.email = novoEmail;
        console.log("Contato editado com sucesso!");
    } else {
        console.log("Contato não encontrado.");
    }
}
// excluir contato
function excluirContato(){
    const nome = prompt("Digite o nome do contato que deseja excluir: ");
    const index = contatos.findIndex(contato => contato.nome === nome)

    if (index !== -1){
        contatos.splice(index, 1)
        console.log('contato removido com sucesso')
    }else{
        console.log("Contato não encontrado.");
    }
        
}


while(true){
    console.log("\nO que deseja fazer?");
    console.log("1. Adicionar contato");
    console.log("2. Pesquisar contato");
    console.log("3. Editar contato");
    console.log("4. Excluir contato");
    console.log("5. Sair");

    const opcao = prompt('digite uma opçao desejada: ')
    if (opcao === '1'){
        adicionarContato()
    }
    else if(opcao === '2'){
        pesquisarContato()
    }
    else if(opcao === '3'){
        editarContato()
    }
    else if(opcao === '4'){
        excluirContato()
    }
    else if(opcao === '5'){
        console.log('saindo do programa.')
        break;
    }
    else{
        console.log('opçao invalida')
    }
}


