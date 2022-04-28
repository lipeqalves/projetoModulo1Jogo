//epimeteu
function personagemEpimeteuEtapa1(){
    var cont = 0;  
    var chance = 2; 
    while(cont < 2){
        var presente = prompt('Digite sua resposta para continuar ou digite sair para finalizar o jogo ').toLowerCase();
        if(presente == "e"){
            alert(`Você ta sabendo da Historia!!!`);
            window.location.assign("../char3_html/char3etapa2.html");
            break;
        }else if(presente == "a" || presente == "b" || presente == "d"|| presente == "c"){
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
        }
    }
}
function personagemEpimeteuEtapa2(){
    var cont = 0;  
    var chance = 2; 
    while(cont < 2){
        var presente = prompt('Digite sua resposta para continuar ou digite sair para finalizar o jogo ').toLowerCase();
        if(presente == "b"){
            alert(`Parabens!! Acertou mais uma`);
            window.location.assign("../char3_html/char3etapa3.html");
            break;
        }else if(presente == "a" || presente == "d" || presente == "c" || presente == "e"){
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
        }
    }
}
function personagemEpimeteuEtapa3(){
    var cont = 0;  
    var chance = 2; 
    while(cont < 2){
        var presente = prompt('Digite sua resposta para continuar ou digite sair para finalizar o jogo ').toLowerCase();
        if(presente == "c"){
            alert(`Presente Enviado!!!`);
            window.location.assign("../char3_html/char3final.html");
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
        }
    }
}
