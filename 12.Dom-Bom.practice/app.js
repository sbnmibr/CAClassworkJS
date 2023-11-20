// --------------------------------------------------------- TASK 1 ---------------------------------------------------------

// Bir dəyişən təyin edin və dəyəri 1 olsun. 1 saniyədən bir consol-da yaratdığınız dəyişənin dəyərini +1 artırın. 4 saniyə
// sonra intervalı sonlandırın.

// let count=1;
//  let interval=setInterval(()=>{
//     console.log(count++);
//  },1000)
//  setTimeout(()=>{
//     clearTimeout(interval);
//  },4000)

// --------------------------------------------------------- TASK 2 ---------------------------------------------------------

// HTML-də button və text üçün tag yazın. button-a click ettikdə text-içindəki yazı dəyişsin.

let start = document.querySelector(".start ");
let text = document.querySelector(".text");

start.addEventListener("click", function () {
  text.style.color = "blue";
  text.innerText = "i am Hades";
  text.style.fontSize = "54px";
});
// --------------------------------------------------------- TASK 3 ---------------------------------------------------------

// HTML-də birdən çox eyni adda class sahib element yaradın. Hər bir elementi loop ilə tək-tək console-a çıxardın.

// let textt = document.querySelectorAll(".textt");

// textt.forEach((item)=>{
//     console.log(item.innerText);
// })

// --------------------------------------------------------- TASK 4 ---------------------------------------------------------

// // let str = "developer";

// Verilmiş string-in hər bir hərfini 1 saniyədən bir böyük hərf edin.

// Developer
// DEveloper
// DEVEloper
// DEVELOper
// DEVELOPer
// DEVELOPEr
// DEVELOPER

// let str = "developer";
// let i = 1;

// let strInterval = setInterval(() => {
//   if (i <= str.length) {
//     str = str.slice(0, i).toLocaleUpperCase() + str.slice(i);
//     console.log(str);
//     i++;
//   } else {
//     clearInterval(strInterval);
//   }
// }, 1000);
let dev = document.querySelector(".dev");
let str = "developer";
let i = 1;

let strInterval = setInterval(() => {
  if (i <= str.length) {
    str = str.slice(0, i).toLocaleUpperCase() + str.slice(i);
   dev.innerText=str
    i++;
  } else {
    clearInterval(strInterval);
  }
}, 1000);

// --------------------------------------------------------- TASK 5 ---------------------------------------------------------

// HTML-də button yaradın və ona click ettikdə body-nin background color-u dəyişsin.

let colors=["red","green","black","purple","orange"]
let btn=document.querySelector(".btn")
btn.addEventListener("click",function() {
 document.body.style.backgroundColor=colors[(Math.floor(Math.random() * colors.length))]
})