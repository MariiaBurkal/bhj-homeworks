const imageCookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

function changeSize() {
  counter.textContent = parseInt(counter.textContent) + 1;//все, вопрос снят! Я смогла задать правильный вопрос гуглу, теперь все работает
  if (counter.textContent % 2 === 0) {
    imageCookie.width = 200;
  } else {
    imageCookie.width = 150;
  }
}

imageCookie.onclick = changeSize;

