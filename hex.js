const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E" ,"F" ];
// # f15025 -> generate a loop set this.We must have #...
// # f15025 -> occur a random  number using array above 
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
let hexColor = "#";
for (let i=0; i<6; i++){ //#f15025 rastgele olusturmaya çalıs
     hexColor += hex[getRandomNumber()]
}
 color.textContent = hexColor;
 document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random()* hex.length)
}