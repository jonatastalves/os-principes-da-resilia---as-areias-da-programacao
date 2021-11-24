principeEsli ();

function principeEsli (){

    

    while(true){

    var escolha = prompt ("1 - for(j = 0; j < deusDoJs; i++); / if (forte){ return morrer } Else { return vencer } \n 2 - wihle (personagem > deusDoJs) / if (forte){ return morrer } Else { return vencer }");

    if (escolha == 2){

        window.location.replace('../esli/esliGameOver.html')
        break
    }

    else if (escolha == 1){

        document.getElementById("resposta-js").innerHTML = (`
        
        <div class="texto-quebra"><h1><br>VOCÊ DERROTOU O DEUS DO JAVASCRIPT , O GRANDE GUARDIÃO DO OÁSIS DA PROGRAMAÇÃO! E FOI LEVADO PELA TEMPESTADE DAS AREIAS DA PROGRAMAÇÃO, O PORTAL SAGRADO!<br><br><br> Ao entrar, você se depara com uma linda taça, capaz de transportar as águas sagradas para o Deserto da Resilia, e conseguir finalmente "limpar" o código, eliminando assim a maldição e reestabelecendo a paz entre todos!<br><br> PARABÉNS POR TER SALVO NOSSO REINO. VOCÊ VERDADEIRAMENTE É UM PRÍNCIPE DA RESÍLIA!  </h1></div><br><br><br>
        <a href="../index.html"><button class="play-button">JOGAR NOVAMENTE</button></a>`);
        break;
    }
    else{     
        alert ("NÚMERO INVÁLIDO, ESCOLHA NOVAMENTE!");   
    }

    }
}