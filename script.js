
function addgrid(height,width){

    const containerInfo= container.getBoundingClientRect();
    const containerHeight = containerInfo.width;
    container.style.cssText=`grid-template-columns: repeat(${width},auto); grid-template-rows: repeat(${height},auto);`;
    for (let i = 0; i<height**2;i++){
        const gridItem=document.createElement('div');
        gridItem.classList.add('gridItem');
        container.appendChild(gridItem);
    }
}

function changeColor(){
    const gridItems = document.querySelectorAll(".gridItem");
    gridItems.forEach((gridItem)=>{
        gridItem.addEventListener('mouseover',()=>{
            gridItem.style.backgroundColor = `rgb(${randomrgb()},${randomrgb()},${randomrgb()})`; //adds random color to the div
            /*const color=window.getComputedStyle(gridItem).backgroundColor;
            console.log(color, typeof color);*/
        })
    })
}

function randomrgb(){
    const value = Math.floor(Math.random()*255);
    return value;
}

function changeGrid() {
    const container = document.querySelector("#container");
    container.innerHTML="";
    let squares;
    do{
        squares=prompt("Enter no. of squares on either side (below 100)");
    }
    while(squares>100)
    addgrid(squares,squares);
    changeColor();
}

function newGrid() {
    const button = document.querySelector('#newGrid');
    button.addEventListener('click', changeGrid);
}

newGrid();


