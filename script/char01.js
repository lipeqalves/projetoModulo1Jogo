//ZEUS
function personagemZeusEtapa1(){
    var cont = 0;  
    var chance = 2; 
    while(cont < 2){
        var presente = prompt('Digite sua resposta para continuar ou digite sair para finalizar o jogo ')
        if(presente == "c"){
            alert(`Parabéns!!! Você esta sabendo da Historia.`);
            window.location.assign("../html/char1etapa2.html");
            break;
        }else if(presente == "a" || presente == "b" || presente == "d" || presente == "e"){
            chance --;
            alert(`Opção Errada!!! Você tem ${chance} chance`);
            window.location.assign("../escolhePersonagem.html");
            cont++;
        }else if(presente == "sair"){
            alert(`Que pena!!! Espero que volte depois`);
            window.location.assign("../finalDoJogo.html");
            break;
        }else if(presente = ""){
            chance --;
            alert(`Opção Errada!!! Você tem ${chance} chances`);
            window.location.assign("../finalDoJogo.html");
            cont++;
        }
        /*else{
            chance --;
            alert(`Opção Errada!!! Você tem ${chance} chances`);
            window.location.assign("../finalDoJogo.html");
            cont++;
        }*/
    }
}

function personagemZeusEtapa2(){
    var cont = 0;  
    var chance = 2; 
    while(cont < 2){
        var presente = prompt('Digite sua resposta para continuar ou digite sair para finalizar o jogo ')
        if(presente == "b"){
            alert(`Parabens!! Acertou mais uma`);
            window.location.assign("../html/char1etapa3.html");
            break;
        }else if(presente == "a" || presente == "d" || presente == "c"|| presente == "e"){
            chance --;
            alert(`Opção Errada!!! Você tem ${chance} chances`);
            window.location.assign("../finalDoJogo.html");
            cont++;
        }else if(presente == "sair"){
            alert(`Que pena!!! Espero que volte depois`);
            window.location.assign("../finalDoJogo.html");
            break;
        }else if(presente = ""){
            chance --;
            alert(`Opção Errada!!! Você tem ${chance} chances`);
            window.location.assign("../finalDoJogo.html");
            cont++;
        }/*
        else{
            chance --;
            alert(`Opção Errada!!! Você tem ${chance} chances`);
            window.location.assign("../finalDoJogo.html");
            cont++;
        }*/
    }
}
function personagemZeusEtapa3(){
    var cont = 0;  
    var chance = 2; 
    while(cont < 2){
        var presente = prompt('Digite sua resposta para continuar ou digite sair para finalizar o jogo ')
        if(presente == "c"){
            alert(`Parabens!!! A História de ZEUS foi concluída`);
            window.location.assign("../html/char1final.html");
            break;
        }else if(presente == "a" || presente == "b" || presente == "d" || presente == "e"){
            chance --;
            alert(`Opção Errada!!! Você tem ${chance} chances`);
            window.location.assign("../finalDoJogo.html");
            cont++;
        }else if(presente == "sair"){
            alert(`Que pena!!! Espero que volte depois`);
            window.location.assign("../finalDoJogo.html");
            break;
        }else if(presente = ""){
            chance --;
            alert(`Opção Errada!!! Você tem ${chance} chances`);
            window.location.assign("../finalDoJogo.html");
            cont++;
        }/*
        else{
            chance --;
            alert(`Opção Errada!!! Você tem ${chance} chances`);
            window.location.assign("../finalDoJogo.html");
            cont++;
        }*/
    }
}
