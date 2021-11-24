principeEsli ();

function principeEsli (){

    

    while(true){

    var escolha = prompt ("1 - function name (param) { statements; } \n 2 - function param (name) { statements; } ");

    if (escolha == 1){

        document.getElementById("resposta-js").innerHTML = (`
        
        <div class="texto-quebra"><h1><br>Parabéns, você passou pelo primeiro desafio do DEVORADOR DE ALMAS DO JS <br><br> conseguiu avançar pelo Deserto da Resilia , dando de cara com a Arraia dos Ventos do CSS. como o próprio nome informa, é uma criatura semelhante a uma arraia marinha, porém essa voa e possui mais de 15 Metros de tamanho. A Criatura pode controlar o clima, os ares e as areias da programação de forma ruim, podendo criar efeitos devastadores no local.<br><br>A única forma de despistar a serpente é usando propriedades para faze-la sumir. Escolha uma opção abaixo:<br><br> 1 - .arraia{ display:none }<br><br>2 - .arraia{ display:flex / justify-content: flex-end}</h1></div><br><br><br>
        <a href="../helio/helio3.html"><button class="play-button">ESCOLHER</button></a>`);
        break;
    }

    else if (escolha == 2){
        
        window.location.replace('../helio/helioGameOver.html')
        break
    }
    else{     
        alert ("NÚMERO INVÁLIDO, ESCOLHA NOVAMENTE!");   
    }

    }
}