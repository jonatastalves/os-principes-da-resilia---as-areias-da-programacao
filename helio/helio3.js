principeEsli ();

function principeEsli (){

    

    while(true){ 

    var escolha = prompt ("1 - .arraia{ display:none } \n 2 - .arraia{ display:flex / justify-content: flex-end}");

    if (escolha == 2){

        document.getElementById("resposta-js").innerHTML = (`
        
        <div class="texto-quebra"><h1><br>VOCE VENCEU O DESAFIO DA ARRAI DOS VENTOS DO CSS!<br><br> Agora é a hora de provar o seu valor com o desafio final do DEUS DO HTML<br><br>Escolha a opção correta para desviar do seu golpe , vencer o desafio e conquistar o acesso ao OÁSIS DA PROGRAMAÇÃO<br><br> Qual das opções abaixo representa respectivamente, um loop de repetição e uma condicional!<br><br> 1 - for(j = 0; j < deusDoJs; i++); / if (forte){ return morrer } Else { return vencer }<br><br>2 - wihle (personagem > deusDoJs) / if (forte){ return morrer } Else { return vencer }</h1></div><br><br><br>
        <a href="../helio/helio4.html"><button class="play-button">ESCOLHER</button></a>`);
        break;
    }

    else if (escolha == 1){
        
        window.location.replace('../helio/helioGameOver.html')
        break
    }
    else{     
        alert ("NÚMERO INVÁLIDO, ESCOLHA NOVAMENTE!");   
    }

    }
}