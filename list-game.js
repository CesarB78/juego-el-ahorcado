let movies = [
  "yo robot",
  "soy leyenda",
  "el hombre araña",
  "iron man",
  "stranger things",
  "bad boys",
  "rapidos y furiosos",
  "star wars",
  "indiana jones",
  "toy story",
  "interstellar",
  "top gun",
  "mision imposible",
  "volver al futuro",
  "avengers",
  "coco",
  "joker",
  "aliens",
  "karate kid",
  "el rey leon",

];


const list = document.getElementById("list");
const numberOfWords = document.getElementById("numberWords");
let listMovies_ = movies[Math.floor(Math.random() * movies.length)];
const validarlistGame = document.getElementById("list-game");
const showFindText = document.querySelector('.count-Word');


//funcion para agregar la lista del juego---------------------------------------------
list.addEventListener("click", (e) => {
  e.preventDefault();
 
  const listGame = document.getElementById("list-game");
  const text = listGame.options[listGame.selectedIndex].text;
  const elementoDOm = document.querySelector(".palabra");
  const findWord = document.getElementById('texto');
  const btnFinWord = document.getElementById('buscarletra');
  
  //al presionar insertar se deben deshabilitar, el ckeck de seleccion y el boton de insertar
  validarlistGame.disabled = true
  list.className = "btn_disabled";
  list.disabled = true

  //cambiar el display a la info de la cantidad de palabras, en inicio esta oculata.
  showFindText.style.display = "block"

  //igualmente se deben habilitar el input de buscar letra y el boton de buscar letra
  findWord.disabled = false
  btnFinWord.disabled = false
  btnFinWord.className = "btn-genera"


  if (text === "Seleccione") {
    alert(
      "debes seleccionar una lista para generar la oracion y empezar el juego"

    );
    findWord.disabled = true
    btnFinWord.disabled = true
    btnFinWord.className = "btn_disabled_genera"
    listGame.disabled = false 
    list.className = "btn";
    list.disabled = false


  }
  findWord.focus();

  if (text === "Peliculas / Series") {
    
    //let listMovies = movies[Math.floor(Math.random() * movies.length)];
    let listMovies = movies[Math.ceil(Math.random()*movies.length)];
        
    
    
    const oracion = listMovies;
    
    const nuevoarreglo = oracion.split(" ");
    numberOfWords.textContent = nuevoarreglo.length;
    const textCheck = document.getElementById('textCheck');

    let conteo = 0;
    
    
    for (let x= 0; x <= nuevoarreglo.length - 1; x++) {
      
      const newDiv = document.createElement('div');
      const newP = document.createElement("p");
      const elementoDOm = document.querySelector(".palabra");

      elementoDOm.appendChild(newDiv);
      newDiv.className="classLetter divWord"+"_"+[x];
      

      for(let i = 0;i<=nuevoarreglo[x].length-1;i++){
            
        const nd = document.querySelector('.divWord' + "_" + [x]) 
        const newP = document.createElement('p');
        newP.style.fontSize = 0;
        newP.className = "parrafo";
        nd.appendChild(newP).textContent = nuevoarreglo[x][i];
                
     }
    
    }
    
  }


  nuevoarreglo = movies;
  

});


//click en el boton de jugar nuevamente............------------------------------------------

const playAgain = document.getElementById('playAgain');
  
      playAgain.addEventListener('click',()=>{

    
    const listGame = document.getElementById("list-game");
    listGame.disabled = false
    list.className = "btn";
    
    const backGame = document.querySelector('.backGame');
    backGame.style.display = "none"

    const hideError = document.querySelector('.error');
    hideError.style.display = "none"

    const resetError = document.getElementById('errorWords');
    resetError.innerText = "";

    const resetList = document.getElementsByClassName('classLetter');
      while(resetList.length>0){
        resetList[0].parentNode.removeChild(resetList[0]);
      }

    const btnListar = document.getElementById('list');
    btnListar.disabled = false

    const showList = document.querySelector('.palabra');
    showList.style.display = "block"

    //se remueve el div que contiene el aviso que notifica que gano
    const hidePlayAgain = document.getElementsByClassName('showTextWinGame');
      while(hidePlayAgain.length>0){
        hidePlayAgain[0].parentNode.removeChild(hidePlayAgain[0]);
      }

    //se remueve el div que contiene el aviso que notifica que perdio
    const hideGameOver = document.getElementsByClassName('showTextGameOver');
    while(hideGameOver.length>0){
      hideGameOver[0].parentNode.removeChild(hideGameOver[0]);
    }

    //ocultar las imagenes que se encuentran en el ahorcado.

    const img_ahor = document.getElementsByClassName('img_ahor');
    while(img_ahor.length>0){
      img_ahor[0].parentNode.removeChild(img_ahor[0]);
    }

    wrongWords.innerText = '';
    
    })


      
      

    
    

    