principeEsli ();

function principeEsli (){

    

    while(true){

    var escolha = prompt ("1 - Usamos uma id , representada por '#' \n 2 - Usamos classes, representadas por '.'");

    if (escolha == 2){

        window.location.replace('../jarom/jaromGameOver.html')
        break
    }

    else if (escolha == 1){

        document.getElementById("resposta-js").innerHTML = (`
        
        <div class="texto-quebra"><h1><br>VOCÊ DERROTOU O DEUS DO CSS , O GRANDE GUARDIÃO DO OÁSIS DA PROGRAMAÇÃO! GANHANDO ACESSO AO PORTAL DAS AREIAS DA PROGRAMAÇÃO, O PORTAL SAGRADO!<br><br><br> Ao entrar, você se depara com uma linda taça, capaz de transportar as águas sagradas para o Deserto da Resilia, e conseguir finalmente "limpar" o código, eliminando assim a maldição e reestabelecendo a paz entre todos!<br><br> PARABÉNS POR TER SALVO NOSSO REINO. VOCÊ VERDADEIRAMENTE É UM PRÍNCIPE DA RESÍLIA!  </h1></div><br><br><br>
        <a href="../index.html"><button class="play-button">JOGAR NOVAMENTE</button></a>`);
        break;
    }
    else{     
        alert ("NÚMERO INVÁLIDO, ESCOLHA NOVAMENTE!");   
    }

    }
}