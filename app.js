const colors = ["green", "red","rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener("click",function(){
    // get random between 0 - 3 colors[3] çünkü array index sıfırdan başlar.
    // const randomNumber = 2; // sadece array içindeki 2.elemnti döndürür [rgba(133,122,200)] -> ama biz random istiyoruz.
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    // console.log(document.body);   //çalışmasın bakıldı.
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});
function getRandomNumber (){
    return Math.floor (Math.random()*colors.length);
}