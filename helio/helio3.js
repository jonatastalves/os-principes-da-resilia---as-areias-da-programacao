principeEsli ();

function principeEsli (){

    

    while(true){ 

    var escolha = prompt ("1 - .arraia{ display:none } \n 2 - .arraia{ display:flex / justify-content: flex-end}");

    if (escolha == 1){

        document.getElementById("resposta-js").innerHTML = (`
        
        <div class="texto-quebra"><h1><br>VOCE VENCEU O DESAFIO DA ARRAIA DOS VENTOS DO CSS!<br><br> Agora é a hora de provar o seu valor com o desafio final do DEUS DO HTML! O Golem Protetor. Trata-se de uma criatura com o corpo semelhante a de uma figura humanoide, ele não se movimenta, nem executa qualquer ação até o momento que perturbam o Oásis da programação, levantando e esmagando a pessoa até ser reduzida a partículas minúsculas.<br><br>Escolha a opção correta para desviar do seu golpe , vencer o desafio e conquistar o acesso ao OÁSIS DA PROGRAMAÇÃO<br><br> O Código para inserção de arquivo CSS no HTML é:<br><br> 1 - < link href="arquivo.css" rel="stylesheet" type="text/css" ><br><br>2 - < link rel="arquivo.css" href="stylesheet" type="text/css" ></h1></div><br><br><br>
        <a href="../helio/helio4.html"><button class="play-button">ESCOLHER</button></a>`);
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