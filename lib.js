let randomNumber = Math.round(Math.random() * 10);
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const bttTry = document.querySelector("#bttTry");
const bttAgain = document.querySelector("#bttAgain");
let attempts = 1;

//events
bttTry.addEventListener('click', handleTryClick);
bttAgain.addEventListener('click', handleAgainClick);
document.addEventListener('keydown', enterKey);

//function callback
function handleTryClick(e){
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if(inputNumber.value == ""){
    alert("Tentativa inválida");
    attempts--;
  }else if(inputNumber.value < 0 || inputNumber.value > 10){
    alert("Tentativa inválida");
    attempts--;
  }else if(Number(inputNumber.value) == randomNumber){
      toggleScreen();
  
      if(attempts > 1){
        //document.querySelector(".screen2 h2").innerHTML = `Acertou em ${attempts} tentativas!`;
        screen2.querySelector("h2").innerHTML = `Acertou em ${attempts} tentativas!`;
      }else{
        screen2.querySelector("h2").innerHTML = `Acertou na primeira tentativa!`;
      }
    }
    attempts++;
    inputNumber.value = "";
}

function handleAgainClick(){
  toggleScreen(); 

  attempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function enterKey(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleAgainClick();
  }
}

function toggleScreen(){
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide"); 
}