const RGB = "0123456789abcdef";
let randomIsClicked = false;
let blackIsClicked = true;
let gridSize = 16;

function reset() {
    let allCells = document.querySelectorAll(".cell");
    allCells.forEach(cell => cell.style.backgroundColor="FFFFFF");
}

function setGridSize(size) {
    let e = document.getElementById("gridSizr");
    size = e.options[e.selectedIndex].value;
    gridSize = size;
    remove();
    generate(size);
}

function remove() {
    const container = document.getElementById("container");
    let allCells = document.querySelectorAll(".cell");
    allCells.forEach(cell => container.removeChild(cell));
}

function generate(gridSize) {
    let cellSize = 512 / gridSize;
    const container = document.getElementById("container");
    for (let i=1; i<=gridSize; i++) {
        for (let j=1; j<=gridSize; j++) {
            const div = document.createElement("div");
            div.className="cell";
            div.style.width = `${cellSize}px`;
            div.style.height = `${cellSize}px`;
            container.appendChild(div);
        }
    }
    changeColor();
}

function autoFill() {
    for (let i=0; i<gridSize; i++) {
        let allCells = document.querySelectorAll(".cell");
        allCells.forEach(cell => cell.style.backgroundColor = `${randomColor()}`);
    }
}

function changeColor() {
    let allCells = document.querySelectorAll(".cell");
    if(randomIsClicked == true) {
        allCells.forEach(cell => cell.addEventListener("mouseenter", function() {
            cell.style.backgroundColor = `${randomColor()}`;
        }));
        allCells.forEach(cell => cell.addEventListener("mouseleave", function() {
            cell.style.backgroundColor = `${randomColor()}`;
        }));
        allCells.forEach(cell => cell.addEventListener("mouseover", function() {
            cell.style.backgroundColor = `${randomColor()}`;
        }));
    } else {
        allCells.forEach(cell => cell.addEventListener("mouseenter", function() {
            cell.style.backgroundColor = "#000000";
        }));
        allCells.forEach(cell => cell.addEventListener("mouseleave", function() {
            cell.style.backgroundColor = "#000000";
        }));
        allCells.forEach(cell => cell.addEventListener("mouseover", function() {
            cell.style.backgroundColor = "#000000";
        }));
    }
}

function randomColor() {
    let myRGB = "#";
    for (i=0; i<6; i++){
        myRGB += RGB[Math.floor(Math.random() * 16)];
    }
    return myRGB;
}

function setRandomIsClicked() {
    randomIsClicked = true;
    changeColor();
}

function black() {
    blackIsClicked = true;
    randomIsClicked = false;
    changeColor();
}

generate(gridSize);
changeColor();