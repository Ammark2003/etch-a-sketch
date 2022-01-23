function addgrid(height,width){
    const container = document.querySelector("#container");
    const containerInfo= container.getBoundingClientRect();
    const containerWidth = containerInfo.width;
    container.style.cssText=`grid-template-columns: repeat(16,auto); grid-template-rows: repeat(16,${containerWidth/width}px);`;
    for (let i = 0; i<height**2;i++){
        const gridItem=document.createElement('div');
        gridItem.classList.add('gridItem');
        container.appendChild(gridItem);
    }
}

function changeColor(){
    const gridItems = document.querySelectorAll(".gridItem");
    gridItems.forEach((gridItem)=>{
        gridItem.addEventListener('mousedown',()=>{
            gridItem.style.backgroundColor = "black";
        })
    })
}

addgrid();
changeColor();

