//Create grid with user-determined number of boxes
let body = document.body;
let gridContainer = document.createElement("div");
gridContainer.setAttribute('id', 'grid-container')

let buttonGridSize = document.getElementById("button-grid-size");
buttonGridSize.addEventListener("click", () => {
    gridElements = parseInt(prompt("Enter number of squares per side of the new grid (max 100): "));
    if(gridElements <= 100){
        gridContainer.setAttribute('value', gridElements);
        createGrid(gridElements);
    }
    while (gridElements > 100) {
        gridElements = parseInt(prompt("Enter number of squares per side of the new grid (max 100): "));

        if(gridElements <= 100){
            gridContainer.setAttribute('value', gridElements);
            createGrid(gridElements);
        }
    }
});

function removeGrid(){
    gridContainer.textContent = '';
}
    

function createGrid(gridElements){
    let counter = 1; 
    let gridElement;

    removeGrid();

    for (let i = 0; i < gridElements; i++) {
        
        for (let j = 0; j < gridElements; j++) {
            gridElement = document.createElement("div");
            gridElement.setAttribute('class','boxes');
            gridElement.setAttribute('id', `${counter}`);

            gridContainer.append(gridElement);

            counter++;
        }
    }
    
    body.append(gridContainer);

    counter = 1;
    
    for (let i = 0; i < gridElements; i++) {
        for (let j = 0; j < gridElements; j++) {
            let element = document.getElementById(`${counter}`);
            element.addEventListener('mousemove', () => {
                element.style.backgroundColor = "red";   
            });
            counter++;
        }
    }
    
};

