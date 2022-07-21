function newGrid() {
    const gridContainer = document.getElementById("container");

    x = prompt("How many rows and columns do you want?");
    console.log(x);

    for (let i = 0; i < x; i++) {
        let myRows = document.createElement("tr");
        myRows.id = "row" + i;

        gridContainer.appendChild(myRows);
        let rowUnit = document.getElementById("row" + i);

        for (let j = 1; j < x; j++) {
            let myCells = document.createElement("td");
            rowUnit.appendChild(myCells);
        }
    }
}

const setGrid = document.getElementById("set");
setGrid.addEventListener("click", () => newGrid());

document.addEventListener("DOMContentLoaded", () => newGrid());