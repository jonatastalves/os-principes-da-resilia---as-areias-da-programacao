principeEsli ();

function principeEsli (){

    while(true){

    var escolha = prompt ("1 - lorem ipsum dolor \n 2 - lorem ipsum dolor erro");

    if (escolha == 2){

        document.getElementById("resposta-js").innerHTML = (`
        
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium modi,<br> autem ea labore quos saepe totam suscipit qui numquam sint provident temporibus <br>nihil quis placeat sunt quaerat quibusdam odio est.<br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium modi,<br> autem ea labore quos saepe totam suscipit qui numquam sint provident temporibus <br>nihil quis placeat sunt quaerat quibusdam odio est.<br> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium modi,<br> autem ea labore quos saepe totam suscipit qui numquam sint provident temporibus <br>nihil quis placeat sunt quaerat quibusdam odio est.<br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium modi,<br> autem ea labore quos saepe totam suscipit qui numquam sint provident temporibus <br>nihil quis placeat sunt quaerat quibusdam odio est.</h1><br><br><br>
        <a href="../esli/esli3.html"><button class="play-button">JOGAR NOVAMENTE</button></a>`);
        break;
    }

    else if (escolha == 1){
        document.getElementById("resposta-js").innerHTML = (`
        
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium modi,<br> autem ea labore quos saepe totam suscipit qui numquam sint provident temporibus <br>nihil quis placeat sunt quaerat quibusdam odio est.<br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium modi,<br> autem ea labore quos saepe totam suscipit qui numquam sint provident temporibus <br>nihil quis placeat sunt quaerat quibusdam odio est.<br> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium modi,<br> autem ea labore quos saepe totam suscipit qui numquam sint provident temporibus <br>nihil quis placeat sunt quaerat quibusdam odio est.<br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium modi,<br> autem ea labore quos saepe totam suscipit qui numquam sint provident temporibus <br>nihil quis placeat sunt quaerat quibusdam odio est.</h1><br><br><br>
        <a href="../index.html"><button class="play-button">REINICIAR</button></a>`);
        break;
    }
    else{     
        alert ("NÚMERO INVÁLIDO, ESCOLHA NOVAMENTE!");   
    }

    }
}