//ZEUS
const escolhaZeus = document.querySelector("#zeusEscolha");
escolhaZeus.addEventListener('click', personagemZeus);

function personagemZeus(){
    var cont = 0;  
    var chance = 2; 
    while(cont < 2){
        var presente = prompt(`Zeus esta tentando se vingar, e envia um presente para o epimeteu, Qual o presente?
       
            a - Carro
            b - Casa
            c - Uma bela mulher com uma caixa
           `);
    if(presente == "c"){
        alert(`Presente enviado!!!`);
        break;
    }else if(presente == "a" || presente == "b"){
        chance --;
        alert(`Opção Errada!!! Você tem ${chance} chances`);
        cont++;
    }else{
        chance --
        alert(`Opção Invalida!!! Você tem ${chance} chances`);
        cont++;
    }
}
}
