function addgrid(){
    const container = document.querySelector("#container");
    const containerInfo= container.getBoundingClientRect();
    const width = containerInfo.width;
    container.style.cssText=`grid-template-columns: repeat(16,auto); grid-template-rows: repeat(16,${width/16.0}px);`;
    for (let i = 0; i<16**2;i++){
        const gridItem=document.createElement('div');
        gridItem.classList.add('gridItem');
        container.appendChild(gridItem);
    }
}

addgrid()