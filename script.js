function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}
let ChangeColorChoice = "black";
let RainBow = false;
let isMouseDown = false;
document.querySelector("#myRange").addEventListener("input", () =>{
    let container = document.querySelector(".container");
    container.innerHTML = "";
    let value = document.querySelector("#myRange").value;
    document.querySelector("output").innerText += " x " + value;
    for(let i = 0; i < value * value; i++){
        let div = document.createElement('div');
        div.style.height = 500/value + "px";
        div.style.minWidth = 500/value + "px";
        div.style.backgroundColor = "white";
        div.style.border = "0px";
        div.style.padding = "0px";
        div.style.margin = "0px";
        div.style.display = "flex";
        div.className = "grid";
        container.appendChild(div);
    }
    document.addEventListener("mousedown", () =>{
        isMouseDown = true;
    })
    document.addEventListener("mouseup", () =>{
        isMouseDown = false;
    })
    document.querySelector("#blackbutton").addEventListener("click", () => {
        ChangeColorChoice = "black";
        RainBow = false;
    })
    document.querySelector("#clear").addEventListener("click",() =>{
       for(let item of document.querySelectorAll(".grid")){
        item.style.backgroundColor = "white";
       }
    })
    document.querySelector("#rainbow").addEventListener("click",() =>{
        ChangeColorChoice = rgb(Math.random()*256,Math.random()*256,Math.random()*256);
        RainBow = true;
    })
    document.querySelector("#eraser").addEventListener("click",() =>{
            ChangeColorChoice = "white";
            RainBow = false;
    })
    for(let item of document.querySelectorAll(".grid")){
        item.addEventListener("mouseenter",function(event){
            if(isMouseDown == true){
                item.style.backgroundColor = ChangeColorChoice;
                if(RainBow == true) ChangeColorChoice = rgb(Math.random()*256,Math.random()*256,Math.random()*256);
            }
        })
    }

})
document.addEventListener("mousedown", () =>{
    isMouseDown = true;
})
document.addEventListener("mouseup", () =>{
    isMouseDown = false;
})
document.querySelector("#blackbutton").addEventListener("click", () => {
    ChangeColorChoice = "black";
    RainBow = false;
})
document.querySelector("#clear").addEventListener("click",() =>{
   for(let item of document.querySelectorAll(".grid")){
    item.style.backgroundColor = "white";
   }
})
document.querySelector("#rainbow").addEventListener("click",() =>{
    ChangeColorChoice = rgb(Math.random()*256,Math.random()*256,Math.random()*256);
    RainBow = true;
})
document.querySelector("#eraser").addEventListener("click",() =>{
        ChangeColorChoice = "white";
        RainBow = false;
})
for(let i = 0; i < 16 * 16;i++){
    let div = document.createElement('div');
    div.style.height = "31.25px";
    div.style.minWidth = "31.25px";
    div.style.backgroundColor = "white";
    div.style.border = "0px";
    div.style.padding = "0px";
    div.style.margin = "0px";
    div.style.display = "flex";
    div.className = "grid";
    document.querySelector('.container').appendChild(div);
}

for(let item of document.querySelectorAll(".grid")){
    item.addEventListener("mouseenter",function(event){
        if(isMouseDown == true){
            item.style.backgroundColor = ChangeColorChoice;
            if(RainBow == true) ChangeColorChoice = rgb(Math.random()*256,Math.random()*256,Math.random()*256);
        }
    })
}


