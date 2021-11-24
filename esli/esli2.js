principeEsli ();

function principeEsli (){

    

    while(true){

    var escolha = prompt ("1 - é uma declaração para informar ao navegador qual é a extensão do arquivo utilizado \n 2 - é uma declaração para informar ao navegador qual é a versão do HTML utilizada.");

    if (escolha == 2){

        document.getElementById("resposta-js").innerHTML = (`
        
        <div class="texto-quebra"><h1><br>Parabéns, você passou pelo primeiro desafio do GROUDON DO HTML <br><br> conseguiu avançar pelo Deserto da Resilia , dando de cara com a Serpente Gigante do CSS. Uma cobra gigantesca de mais de 50 metros de comprimento, que sempre anda debaixo da areia. A criatura surge do chão ao sentir todo e qualquer movimento, mesmo sem a presença de olhos. Seus dentes possuem força brutal.<br><br>A única forma de despistar a serpente é usando propriedades de FLEXBOX para tirá-la de sua frente empurrando ela pro lado e seguir o caminho. Escolha uma opção abaixo:<br><br> 1 - .serpent{ display:flex / justify-content: center}<br><br>2 - .serpent{ display:flex / justify-content: flex-end}</h1></div><br><br><br>
        <a href="../esli/esli3.html"><button class="play-button">ESCOLHER</button></a>`);
        break;
    }

    else if (escolha == 1){
        
        window.location.replace('../esli/esliGameOver.html')
        break
    }
    else{     
        alert ("NÚMERO INVÁLIDO, ESCOLHA NOVAMENTE!");   
    }

    }
}