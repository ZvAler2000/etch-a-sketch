let grid = document.getElementById("grid");
let changeGrid = document.getElementById("changeGrid");
let gridN = 16;

function createGrid() {
    grid.innerHTML = '';
    for(let i = 0; i < gridN; i++) {
        const row = document.createElement("div");
        row.classList.add("row")
    
        for(let j = 0; j < gridN; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            
            pixel.addEventListener("mouseover", (event) => {
                pixel.style.background = "black";
            });
    
            row.appendChild(pixel);
        }
    
        grid.appendChild(row);
    }
}

changeGrid.addEventListener("click", () => {
    gridN = prompt("Please input dimensions of grid: ");

    while(gridN <= 0 || gridN > 100) {
        gridN = prompt("Please input dimensions of grid: ");
    }

    createGrid();
})

console.log(grid.children);
createGrid();