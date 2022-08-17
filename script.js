const setGrid = document.getElementById("set");
const setRainbow = document.getElementById("rainbow");
const setBlack = document.getElementById("black");
let squareColor = false;

function newGrid() {
    const gridContainer = document.getElementById("container");
    gridContainer.innerHTML = '';
    let x = prompt("How many squares per side do you want?");
      if (x > 100) {
        alert("Too many! 100 is the limit.");
        newGrid();
      }
      else {
        for (let i = 0; i < x ** 2; i++) {
         const square = document.createElement("div");
         square.classList.add('square');
         gridContainer.appendChild(square);
         gridContainer.style.setProperty('grid-template-columns', `repeat(${x}, auto)`);
         gridContainer.style.setProperty('grid-template-rows', `repeat(${x}, auto)`);
         square.addEventListener("mouseover", () => squarePaint(square));
        }
  }
}

setGrid.addEventListener("click", () => newGrid());
setRainbow.addEventListener("click", function() { squareColor = true; });
setBlack.addEventListener("click", function() { squareColor = false; });

function squarePaint(square) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  if (squareColor === false) {
    square.style.setProperty('background-color', 'black');
  }
  else {
    square.style.setProperty('background-color', `rgb(${r},${g},${b})`);
  }
}

document.addEventListener("DOMContentLoaded", () => newGrid());