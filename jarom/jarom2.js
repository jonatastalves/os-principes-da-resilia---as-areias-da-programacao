principeEsli ();

function principeEsli (){

    

    while(true){

    var escolha = prompt ("1 - < o l > \n 2 - < olist > ");

    if (escolha == 1){

        document.getElementById("resposta-js").innerHTML = (`
        
        <div class="texto-quebra"><h1><br>Parabéns, você passou pelo primeiro desafio da Múmia do HTML<br><br> conseguiu passar pela pirâmide e avançar pelo Deserto da Resilia , indo parar diretamente no covil da ANFISBENA DO JAVASCRIPT, essa enorme criatura tem a aparência de uma cobra com duas cabeças, sendo uma em sua cauda, alem de pés de galinha e asas de dragão, a Anfisbena tem um veneno capaz de paralisar e derreter a sua presa por dentro, estando quase sempre em baixo da terra para não ser notada... Para derrotá-la você precisava completar o desafio abaixo:<br><br> Qual das opções abaixo são laços de repetição ><br><br> 1 - if , else if, else <br><br>2 - while , for.</h1></div><br><br><br>
        <a href="../jarom/jarom3.html"><button class="play-button">ESCOLHER</button></a>`);
        break;
    }

    else if (escolha == 2){
        
        window.location.replace('../jarom/jaromGameOver.html')
        break
    }
    else{     
        alert ("NÚMERO INVÁLIDO, ESCOLHA NOVAMENTE!");   
    }

    }
}