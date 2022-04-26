//pandora
function personagemPandoraEtapa1(){
    var cont = 0;  
    var chance = 2; 
    while(cont < 2){
        var presente = prompt('Digite sua resposta para continuar ou digite sair para finalizar o jogo ').toLowerCase();
        
        if(presente == "d"){
            alert(`Você ta sabendo da Historia!!!`);
            window.location.assign("../char2_html/char2etapa2.html");
            break;
        }else if(presente == "a" || presente == "b" || presente == "c" || presente == "e"){
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
function personagemPandoraEtapa2(){
    var cont = 0;  
    var chance = 2; 
    while(cont < 2){
        var presente = prompt('Digite sua resposta para continuar ou digite sair para finalizar o jogo ').toLowerCase();
        if(presente == "e"){
            alert(`Parabens!! Acertou mais uma`);
            window.location.assign("../char2_html/char2etapa3.html");
            break;
        }else if(presente == "a" || presente.toUpperCase == "b" || presente == "d" || presente == "c"){
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
function personagemPandoraEtapa3(){
    var cont = 0;  
    var chance = 2; 
    while(cont < 2){
        var presente = prompt('Digite sua resposta para continuar ou digite sair para finalizar o jogo ').toLowerCase();
        if(presente == "a"){
            alert(`Presente Enviado!!!`);
            window.location.assign("../char2_html/char2final.html");
            break;
        }else if(presente == "e" || presente == "b" || presente == "d" || presente == "c"){
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