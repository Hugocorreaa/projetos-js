//Variáveis
let body = document.getElementsByTagName("body")[0];
let pDarkLight = document.getElementById("p-dark");
let ligarButton = document.getElementById("ligar");
let desligarButton = document.getElementById("desligar");
const darkModeClass = "dark-mode";

//Eventos
ligarButton.addEventListener("click", ligarDesligarDark);
desligarButton.addEventListener("click", ligarDesligarDark);

//Funções
function changeClasses() {
  ligarButton.classList.toggle(darkModeClass);
  pDarkLight.classList.toggle(darkModeClass);
  desligarButton.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
}

function changeText() {
  if (pDarkLight.classList.contains(darkModeClass)) {
    pDarkLight.innerHTML = "Light Mode";
  } else {
    pDarkLight.innerHTML = "Dark Mode";
  }
}

function changeColor() {
  if (body.classList.contains(darkModeClass)) {
    body.style.backgroundImage =
      "linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)";
  } else {
    body.style.backgroundImage = "linear-gradient(120deg, #f6d365, #fda085)";
  }
}

function changeButton() {
  if (ligarButton.classList.contains(darkModeClass)) {
    ligarButton.style.display = "none";
    desligarButton.style.display = "initial";
  } else {
    ligarButton.style.display = "initial";
    desligarButton.style.display = "none";
  }
}

//main function
function ligarDesligarDark() {
  changeClasses();
  changeText();
  changeColor();
  changeButton();
}
