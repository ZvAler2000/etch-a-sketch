let grid = document.getElementById("grid");

for(let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row")

    for(let j = 0; j < 16; j++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        
        pixel.addEventListener("mouseover", (event) => {
            pixel.style.background = "black";
        });

        row.appendChild(pixel);
    }

    grid.appendChild(row);
}

console.log(grid.children);