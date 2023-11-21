// Task1
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   const parentDiv = this.parentElement;

//   console.log(parentDiv);
//   parentDiv.style.backgroundColor = "teal";
//   parentDiv.style.position = "relative";
//   parentDiv.style.width = "200px";
//   parentDiv.style.height = "200px";

//   this.style.position = "absolute";
//   this.style.bottom = "20px";
//   this.style.right = "20px";
// });

//  task2

// let list= document.querySelector(".list");
// let cities= document.querySelector(".cities");
// let liArr =["ganja","baku","yevlakh","Goranboy","shamkir"];
// let ulElem=document.createElement("ul")
// ulElem.style.listStyle= "none";
// liArr.forEach((item)=>{
//     let liElem=document.createElement("li");
//     liElem.innerText=item;

//     ulElem.append(liElem);

//     liElem.addEventListener("click",function() {
//         liElem.remove()
//     })
// })

// cities.append(ulElem);

// task3
let header = document.querySelector(".header");
header.style.backgroundColor = "blue";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignhItems = "center";
header.style.paddingLeft = "50px";
header.style.paddingRight = "50px";
let h3 = document.querySelector("h3");
h3.style.fontSize = "40px";

let nav = document.querySelector(".nav");
nav.style.display = "flex";
nav.style.listStyle="none"
nav.style.gap="30px"

let btn = document.querySelector(".btn");

btn
