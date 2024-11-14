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

for (box of boxes) {
    box.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'greenyellow';
      });
}
