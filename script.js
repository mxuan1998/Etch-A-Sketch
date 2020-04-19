const container = document.querySelector("#container");
const parentBlock = document.createElement("div");
let initialGridSize = 16;
const appButtons = document.querySelector("#appButtons");
let isRandomOn = false;

function createParentBlock(size) {
    parentBlock.setAttribute("class", "parent-block");
    parentBlock.style.display = "grid";
    parentBlock.style.gridTemplateColumns = `repeat(${size}, 1fr)`；
    parentBlock.style.gridTemplateRows = `repeat(${size}, 1fr)`；
    container.appendChild(parentBlock);
}

function createChildrenBlock(size) {
    for (let i=0; i<size; i++) {
        const childBlock = document.createElement("div");
        childBlock.setAttribute("class", "child-block");
        childBlock.setAttribute("isHovered", "false");
        childBlock.style.filter = "brightness(100%)";
        parentBlock.appendChild(childBlock);
    }
    setColorOnHover();
}

function setColorOnHover() {
    const childBlockArr = document.querySelectorAll(".child-block");
    childBlockArr.forEach(e) => {
        console.log(isRandomOn == true && e.getAttribute("isHovered") == "false");
        if (isRandomOn == false) {
            e.style.background = "black";
        } else if (isRandomOn == true && e.getAttribute("isHovered") == "false") {
            let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
            e.style.background = randomColor;
            e.setAttribute("isHovered", "true");
        } else {
            let brightness = parseInt(e.style.filter.match(/\d+));
            e.style.filter = `brightness(${brightness - 10}%)`
        }
    }
}

function resetGame() {
    while(parentBlock.hasChildNodes()) {
        parentBlock.removeChild(parentBlock.firstChild);
    }
}

function getInput() {
    do {
        initialGridSize = parseInt(prompt("How many squares per side for the new grid? (Numbers only)"), 10);
    } while (isNaN(parseInt(initialGridSize, 10)))
}

appButtons.addEventListener("click", (e) => {
    resetGame();
    switch (e.target.className) {
        case "generate-block":
            getInput();
            createParentBlock(initialGridSize);
            break;
        case "random-button":
            isRandomOn = true;
            break;
        case "clear-button":
            isRandomOn = false;
            break;
        default: 
            console.log("Invalid input");
    }
    createChildrenBlock(initialGridSize);
});

function gameInit() {
    createParentBlock(initialGridSize);
    createChildrenBlock(initialGridSize);
}

gameInit();