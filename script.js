
for(let i = 0; i < 256;i++){
    let div = document.createElement('div');
    div.style.height = "31.25px";
    div.style.minWidth = "31.25px";
    div.style.backgroundColor = "lightgray";
    div.style.border = "0px";
    div.style.padding = "0px";
    div.style.margin = "0px";
    div.style.display = "flex";
    div.className = "grid";
    document.querySelector('.container').appendChild(div);
}
for(let item of document.querySelectorAll(".grid")){
    item.addEventListener("mouseenter",function(event){
        item.style.backgroundColor = "black";
    })
}