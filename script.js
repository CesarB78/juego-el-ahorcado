//funcion para capturar el nombre del usuario quien va a jugar
const btnNameUser = document.getElementById("btn_enviar");
const label_user = document.getElementById("label_user");

const starGame = btnNameUser.addEventListener("click", () => {
  
  const inputTextUser = document.getElementById("input_text_user");  
  const newPUser = document.createElement('p');
  newPUser.className = "nameUsuario";
  const newUser = document.createTextNode(inputTextUser.value);
  const divPadreContainer = document.querySelector('.container');
  const listaGame = document.getElementById('list-game');
  
  divPadreContainer.appendChild(newPUser);
  newPUser.appendChild(newUser);

  const nameUsuario = document.querySelector('.nameUsuario');  
  

  if(inputTextUser.value === ""){
    alert("El Campo nombre no puede estar vacio")
    location.reload();
    inputTextUser.focus()
    
    

  }else{
    
    listaGame.disabled = false
    btnNameUser.className = "btn_enviar";
    inputTextUser.disabled = true
    btnNameUser.disabled = true
    list.disabled = false
    list.className = "btn"
    inputTextUser.value = "";
    
  }
  
});


//------------------------------------------------------ FUNCION PARA CONSULTAR LA LETRA 
const buscarLetra = document.getElementById("buscarletra");
const displayGameOver = document.querySelector(".palabra");

let suma = 0;
let totalLetrasCOrrectas = 0;
let scoreTotal = 0;
let numberChallenge = 0;

const wrongWords = document.getElementById('wrongWords');
const textouno = document.getElementById('texto');
let arregloWrongWords = [];
arregloWrongWords.push(textouno)

buscarLetra.addEventListener("click", (e) => {
  
  e.preventDefault();
  
  const box = document.getElementById("texto");
  const BoxChar = document.getElementById("texto").value;
  const textos = document.querySelectorAll(".classLetter");
  const parrafo = document.getElementById("parrafo");
  const base = document.getElementById("base");
  const errorWords = document.getElementById("errorWords");
  const error = document.querySelector(".error");

  const p = document.querySelectorAll(".parrafo");

  const boxJustChar = BoxChar.slice(0, 1);

  let conteo = 0;
  let letrasCorrectas = 0;

  if(box.value == ""){
    alert("Debes consultar una letra")
    box.focus();


  }else{
    //aqui buscamos letra por letra

    for (let i = 0; i <= p.length - 1; i++) {
      var anchoVentana = window.innerWidth;
    if (p[i].innerText === BoxChar) {
      
      if(anchoVentana<=1000){
        p[i].style.fontSize = "1.2rem";  
        
      }else{
        p[i].style.fontSize = "2.5rem";
      }
      
      letrasCorrectas++;
    } else {
      conteo++;
    }
    }
    

  totalLetrasCOrrectas = totalLetrasCOrrectas + letrasCorrectas;
  

  //condicion cuando gane = cantidad de letras de la palabra = cantidad de letras correctas en el juego
  
  if (totalLetrasCOrrectas === p.length) {
    totalLetrasCOrrectas = 0;
    scoreTotal = scoreTotal + 100;
    numberChallenge ++;

    // al ganar  , se deben deshabilitar todos los campos , input y botones anteriores.
      //deshabilitar input de buscar la letra y el boton 
    const buscarLetra = document.getElementById('buscarletra');
    box.disabled = "false";
    buscarLetra.className = "btn_disabled_genera"
    buscarLetra.disabled = "false"

    
    const nameUsuario = document.querySelector('.nameUsuario'); 

    displayGameOver.style.display = "none";
    const divShowTextWin = document.createElement("div");
    divShowTextWin.className = "showTextWinGame";
    const divPadre = document.querySelector(".container");
    const pWin = document.createElement("p");
    
    const showTextWinGame = document.querySelector(".showTextWinGame");
    const textAddWin = document.createTextNode(`Felicidades ${nameUsuario.textContent}...Reto # ${numberChallenge} + 100 pts!!!!`);
    
    const score = document.getElementById('score');
    score.innerText = `${scoreTotal} Pts`;
    
    
    divPadre.appendChild(divShowTextWin);
    divShowTextWin.appendChild(pWin);
    pWin.appendChild(textAddWin);

    const backGame = document.querySelector('.backGame');
    backGame.style.display = "block"
    suma = 0;

  }
  // si llega a un total de 300 puntos gana el challenge 
  if(scoreTotal === 1000){
    winTheChallenge();

  }

  //condicion para contar los errores en letras erradas, cada vez que se digite una letra , valida por cada una de ellas.
  if (conteo === p.length) {
    suma = suma + 1;

    error.style.display = "block";
    error.style.display = "flex";
    errorWords.innerText = `Error : ${suma} de 7`;

    //---------------
    arregloWrongWords.forEach((elemento)=>{
      wrongWords.innerText +=  textouno.value + `${","}`
    })
    
    //------------
    
    

    const img = document.createElement("img");
    
    // mediante la declaracion de un switch validamos para agregar la imagen cada vez que comete un error en las letras
    switch (suma) {
      case 1:
        img.src = "./img/lazo.png";
        img.className = "img_ahor lazo";
        img.style.display = "block";
        document.getElementById("imagenes").appendChild(img);
        break;
      case 2:
        img.src = "./img/head.png";
        img.className = "img_ahor head";
        img.style.display = "block";
        document.getElementById("imagenes").appendChild(img);
        break;
      case 3:
        img.src = "./img/body.png";
        img.className = "img_ahor body";
        img.style.display = "block";
        document.getElementById("imagenes").appendChild(img);
        break;
      case 4:
        img.src = "./img/right_arm.png";
        img.className = "img_ahor right_arm";
        img.style.display = "block";
        document.getElementById("imagenes").appendChild(img);
        break;
      case 5:
        img.src = "./img/right_arm.png";
        img.className = "img_ahor left_arm";
        img.style.display = "block";
        document.getElementById("imagenes").appendChild(img);
        break;
      case 6:
        img.src = "./img/leg_right.png";
        img.className = "img_ahor right_leg";
        img.style.display = "block";
        document.getElementById("imagenes").appendChild(img);
        break;
      case 7:
        img.src = "./img/leg_right.png";
        img.className = "img_ahor left_leg";
        img.style.display = "block";
        document.getElementById("imagenes").appendChild(img);
        break;
    }
    // cuando pierde el juego : si llega al total de 7 palabras erradas, genera un aviso que pierde el juego

    if (suma === 7) {
      // el perder , se deben deshabilitar todos los campos , input y botones anteriores.
      //deshabilitar input de buscar la letra y el boton 

      const buscarLetra = document.getElementById('buscarletra');
      box.disabled = "false";
      buscarLetra.className = "btn_disabled_genera"
      buscarLetra.disabled = "false"
      
      //deshabilitar la lista de seleccion y el boton
      const listGame = document.getElementById('list-game').disabled = "false";
      const listBtn = document.getElementById('list').classList = "btn_disabled";
      
      

      displayGameOver.style.display = "none";

      const nameUsuario = document.querySelector('.nameUsuario'); 
      
           
      const divShowTextGameOver = document.createElement("div");
      divShowTextGameOver.className = "showTextGameOver";
      const divPadre = document.querySelector(".container");
      const pGameOver = document.createElement("p");
      
      const showTextGameOver = document.querySelector(".showTextGameOver");
      const textGameOver = document.createTextNode(`Lo siento ${nameUsuario.textContent} Vuelve a intentarlo......`);
      
      
      divPadre.appendChild(divShowTextGameOver);
      divShowTextGameOver.appendChild(pGameOver);
      pGameOver.appendChild(textGameOver);
      
       // al perder , habilita los botones       
       const backGame = document.querySelector('.backGame');
       backGame.style.display = "block"
       suma = 0;
  
    
    }
  }

  gameForm.reset();
  box.focus();

  }
  });

  //funcion para iniciar el juego desde cero.
  //cuando presiona al boton de rendirser.

  const endGame = document.getElementById('giveUp');

  endGame.addEventListener('click',()=>{

    location.reload();

  })

  // funcion para recargar la pagina

  function reloadWeb() {
    location.reload()
  }
  

  //funcion para salir del si el usuario lo desea "presiona aqui para salir del juego"

  const exitGame = document.getElementById('btn_exit_game');
  exitGame.addEventListener('click',()=>{
    location.reload()
  })

  
  // funcion que gana el reto si llega a los 1000 puntos 

  function winTheChallenge(){
    const nameUsuario = document.querySelector('.nameUsuario'); 
    const hidePlayAgain = document.getElementsByClassName('showTextWinGame');

    const backGame = document.querySelector('.backGame');
    backGame.style.display = "none"

    while(hidePlayAgain.length>0){
        hidePlayAgain[0].parentNode.removeChild(hidePlayAgain[0]);
      }

    const divShowTextWinChallenge = document.createElement("div");
    divShowTextWinChallenge.className = "showTextWinGameChallenge";
    const divPadre = document.querySelector(".container");
    const pChallenge = document.createElement("p");
    
    const showTextWinGameChallenge = document.querySelector(".showTextWinGameChallenge");
    const textWinChallenge = document.createTextNode(`Felicidades ${nameUsuario.textContent}.... Has conseguido el reto`);
    
    divPadre.appendChild(divShowTextWinChallenge);
    divShowTextWinChallenge.appendChild(pChallenge);
    pChallenge.appendChild(textWinChallenge);
    setTimeout(reloadWeb, 4000);


  }
  

  

  

  


