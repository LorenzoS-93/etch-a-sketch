// number of divs
let n = 16;
let dim = Math.sqrt(780*780/n);
const container = document.createElement("div");

document.body.appendChild(container);
container.setAttribute("class", "container");

// create n buttons, each with a class and a text equal to the current position of the oprions array
let docFrag = document.createDocumentFragment();
for (let i = 1; i <= n; i++) {
    let elem = document.createElement("div");
    elem.setAttribute("class", "square");
    elem.setAttribute("style", `width: ${dim}px; height: ${dim}px;`);
    docFrag.appendChild(elem);
}
container.appendChild(docFrag);

