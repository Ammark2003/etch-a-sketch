
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
            //gridItem.style.backgroundColor = `rgb(${randomrgb()},${randomrgb()},${randomrgb()})`; //adds random color to the div
            const color = addBlack(gridItem);
            gridItem.style.backgroundColor=color;
        })
    })
}

function addBlack(gridItem){
    let color=window.getComputedStyle(gridItem).backgroundColor;
    let finalColor="rgb(";
    let start,end;
    for (let i=0;i<color.length;i++) {
        if (color[i]=='('){
            start=i;
        }
        else if (color[i]==')'){
            end=i;
        }
    }
    color = color.slice(start+1,end);
    const rgb=color.split(',')
    rgb.forEach ( (value) => {
        value=value.trim();
        value=parseInt(value);
        if (value>25.5){
            value=value-25.5;
        }
        
        else {
            value=0;
            
        }
        finalColor+=`${value},`;
    })
    finalColor=finalColor.slice(0,finalColor.length-1)+")";
    return finalColor;
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


