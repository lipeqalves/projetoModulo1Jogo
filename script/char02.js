//pandora
function personagemPandoraEtapa1(){
    var cont = 0;  
    var chance = 2; 
    while(cont < 2){
        var presente = prompt('Digite sua resposta: ')
        if(presente == "c"){
            alert(`Você ta sabendo da Historia!!!`);
            window.location.assign("../char2_html/char2etapa2.html");
            break;
        }else if(presente == "a" || presente == "b" || presente == "d"){
            chance --;
            alert(`Opção Errada!!! Você tem ${chance} chances`);
            window.location.assign("../escolhePersonagem.html");
            cont++;
        }else{
            chance --
            alert(`Opção Invalida!!! Você tem ${chance} chances`);
            window.location.assign("../escolhePersonagem.html");
            cont++;
        }
    }
}
function personagemPandoraEtapa2(){
    var cont = 0;  
    var chance = 2; 
    while(cont < 2){
        var presente = prompt('Digite sua resposta: ')
        if(presente == "b"){
            alert(`Parabens!! Acertou mais uma`);
            window.location.assign("../char2_html/char2etapa3.html");
            break;
        }else if(presente == "a" || presente == "d" || presente == "c"){
            chance --;
            alert(`Opção Errada!!! Você tem ${chance} chances`);
            window.location.assign("../escolhePersonagem.html");
            cont++;
        }else{
            chance --
            alert(`Opção Invalida!!! Você tem ${chance} chances`);
            window.location.assign("../escolhePersonagem.html");
            cont++;
        }
    }
}
function personagemPandoraEtapa3(){
    var cont = 0;  
    var chance = 2; 
    while(cont < 2){
        var presente = prompt('Digite sua resposta: ')
        if(presente == "d"){
            alert(`Presente Enviado!!!`);
            window.location.assign("../char2_html/char2final.html");
            break;
        }else if(presente == "a" || presente == "b" || presente == "c"){
            chance --;
            alert(`Opção Errada!!! Você tem ${chance} chances`);
            window.location.assign("../escolhePersonagem.html");
            cont++;
        }else{
            chance --
            alert(`Opção Invalida!!! Você tem ${chance} chances`);
            window.location.assign("../escolhePersonagem.html");
            cont++;
        }
    }
}
