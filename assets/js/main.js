// main.js

// document.body.style.transform='rotate(90deg)';

// let rotation = 0;
// document.addEventListener("click", function () {
// let min = 10;
// let max = 40;
// rotation += randomNumber(1,200);
// rotation += Math.floor(Math.random() * (max - min + 1)) + min;
// document.body.style.transform = `rotate(${rotation}deg)`;
// });

function randomNumber(min, max){
    return Math.floor(Math.random() * (min-max)+1)+min;
}
let divs=document.querySelectorAll(".grid-container div");
function randomize(){
    divs.forEach(function(div) {
        let scale= randomNumber(.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translateY = randomNumber(0, 20);
        let rotate = randomNumber (0, 360);
        div.style.transforms=
            `scale(${scale})
            translate(${translateX}%, $(translateY)%)
            rotate(${rotate}deg)";
    })
    console.log(dive.length, "randomize!")
}