principeEsli ();

function principeEsli (){

    

    while(true){ 

    var escolha = prompt ("1 - if , else if, else \n 2 - while , for.");

    if (escolha == 2){

        document.getElementById("resposta-js").innerHTML = (`
        
        <div class="texto-quebra"><h1><br>VOCE VENCEU O DESAFIO DA ANFISBENA DO JAVASCRIPT!<br><br> Agora é a hora de provar o seu valor com o desafio final do DEUS DO CSS! O VERME MALDITO. um inseto gigante semelhante a uma centopéia com aparência macabra e velocidade um pouco inferior, podendo se esconder sobre o solo, os vermes atacam saltando da areias da programação (onde se escondem para proteger o portal sagrado que leva para o Oásis) mordendo seu alvo com um dos venenos mais fortes existentes, matando o alvo em 2 Turnos sem o tratamento adequado.<br><br>Para desviar de sua mordida acerte a questão abaixo, vença o desafio e conquiste a passagem para o OÁSIS DA PROGRAMAÇÃO<br><br> Para formatar apenas um elemento com características exclusivas usamos o que em css ?<br><br> 1 - Usamos uma id , representada por '#'<br><br>2 - Usamos classes, representadas por '.'</h1></div><br><br><br>
        <a href="../jarom/jarom4.html"><button class="play-button">ESCOLHER</button></a>`);
        break;
    }

    else if (escolha == 1){
        
        window.location.replace('../jarom/jaromGameOver.html')
        break
    }
    else{     
        alert ("NÚMERO INVÁLIDO, ESCOLHA NOVAMENTE!");   
    }

    }
}