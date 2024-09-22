// number of divs
let n = 16;
const container = document.createElement("div");
const content = document.createElement("div");
document.body.appendChild(content);
content.setAttribute("class", "content");

content.appendChild(container);
container.setAttribute("class", "container");



function game() {
    let color = "black";
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
            if (color === "rainbow"){
                square.setAttribute("class", `${square.getAttribute("class")} rainbow`);
            }
            else
                square.style.backgroundColor = `${color}`;
        });
        square.addEventListener("mousemove", () => {
            if(isDrawing) {
                if (color === "rainbow"){
                    square.setAttribute("class", `${square.getAttribute("class")} rainbow`);
                }
                else
                    square.style.backgroundColor = `${color}`;
            } 
        });
        square.addEventListener("mouseup", () => {
            if(isDrawing) {
                if (color === "rainbow"){
                    square.setAttribute("class", `${square.getAttribute("class")} rainbow`);
                }
                else
                    square.style.backgroundColor = `${color}`;
                isDrawing = false;
            }
        });
    }
    
    const clr = document.querySelector(".color");
    clr.addEventListener("click", () => {
    color = prompt("Enter desired color", "black");
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