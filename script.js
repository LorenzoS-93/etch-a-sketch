// number of divs
let n = 16;
const container = document.createElement("div");
const content = document.createElement("div");
document.body.appendChild(content);
content.setAttribute("class", "content");

content.appendChild(container);
container.setAttribute("class", "container");

function rgbRandom() {
    return Math.floor(Math.random() * 255);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function colorSquare(e, color) {
    if (color === "rainbow") {
        e.setAttribute("class", `${e.getAttribute("class")} rainbow`);
    }
    else if (color === "random") {
        const rnd = [rgbRandom(), rgbRandom(), rgbRandom()];
        e.style.backgroundColor = `rgb(${rnd.toString()})`;
    }
    else {
        e.style.backgroundColor = `${color}`;
        //opa += 0.1;
        //square.style.opacity = `${opa}`;
    }

}

function game() {
    let color = "black";
    const clr = document.querySelector(".color");
    clr.style.backgroundColor = `${color}`;
    let opa = 0;
    // create n*n square in a grid;
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    n *= n;
    let dim = Math.sqrt(780*780/n);
    let docFrag = document.createDocumentFragment();
    for (let i = 1; i <= n; i++) {
        let elem = document.createElement("div");
        elem.setAttribute("class", "square");
        elem.setAttribute("style", `width: ${dim}px; height: ${dim}px;`);
        docFrag.appendChild(elem);
    }
    container.appendChild(docFrag);

    let isDrawing = false;
    const nodeList = document.querySelectorAll(".square");
    for(const square of nodeList) {
        square.addEventListener("mousedown", () => {
            isDrawing = true
            colorSquare(square, color);
        });
        square.addEventListener("mousemove", () => {
            if(isDrawing) {
                colorSquare(square, color);
            } 
        });
        square.addEventListener("mouseup", () => {
            if(isDrawing) {
                colorSquare(square, color);
                isDrawing = false;
            }
        });
    }
      
    clr.addEventListener("click", () => {
        color = prompt("Enter desired color", "black");
        colorSquare(clr, color);
        clr.textContent = `${capitalizeFirstLetter(color.toLowerCase())}`;
    });
}

game();

const btn = document.querySelector(".reset");
btn.addEventListener("click", () => {
    n = prompt("Enter the lenght of the square (max 100)", "number");
    while (n <= 0 || n >100) {
        alert("Invalid choice, insert a number bigger than 0 and smaller or equal to 100");
        n = prompt("Enter the lenght of the square (max 100)", "16");
    }
    game();
});