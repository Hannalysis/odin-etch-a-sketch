const container = document.querySelector("#container");


for (let i = 1; i < 5; i++) {
    /* Create the row*/
    const row = document.createElement("div");
    row.setAttribute("class", `row`);
    container.appendChild(row);
    for (let i = 1; i < 5; i++){
        /* Create the boxes for the row*/
        const div = document.createElement("div");
        div.setAttribute("class", `box`);
        row.appendChild(div);
    }
}

const boxes = document.getElementsByClassName("box");
function boxTrail(){
    for (box of boxes) {
        box.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'greenyellow';
        });
    }
}

boxTrail();

// Button
const button = document.querySelector("button");

button.addEventListener("click", () => {
    let gridNum = prompt("Grid size request: n x n. n = ");
    if (gridNum > 100) {
        return alert("Please enter a number up to 100 only.");
    }
    else {
        clearGrid();
        newGrid(gridNum);
    }
});

function newGrid(number) {
    number ++;
    for (let i = 1; i < number; i++) {
        /* Create the row*/
        const row = document.createElement("div");
        row.setAttribute("class", `row`);
        container.appendChild(row);
        for (let i = 1; i < number; i++){
            /* Create the boxes for the row*/
            const div = document.createElement("div");
            div.setAttribute("class", `box`);
            row.appendChild(div);
        }
    }
    boxTrail();
}

function clearGrid () {
    const elements = document.getElementsByClassName('row');
    const elementLength = elements.length;
    for (let i = 1; i <= elementLength; i++){
        console.log(elements);
        elements[0].remove();
    }
}