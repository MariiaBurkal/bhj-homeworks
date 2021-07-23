const imageCookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

function changeSize() {
  counter.textContent = counter.textContent + 1;
  if (counter.textContent % 2 === 0) {
    imageCookie.width = 200;
  } else {
    imageCookie.width = 150;
  }
}

imageCookie.onclick = changeSize;

