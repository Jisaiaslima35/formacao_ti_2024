const prompt = require("prompt-sync")()


while(true){
    var vez = prompt('Rodar Mais Uma Vez o Programa? [s] ou [n]')

    if(vez === 's'){
       
        var nome = prompt('diga seu nome: ')
        var idade = prompt('sua idade: ')

        if(idade >= 18){
            prompt(nome + ' parabens vc tem maior idade')
        }
        else{
            prompt(nome + ' vc ainda é de menor idade')
}
    
    }
    else{
        prompt('programa encerrado Ate mais!!!')
        break;
    }
    }
