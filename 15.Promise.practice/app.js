const BASE_URL = "https://dog.ceo/api/breeds/image";
let image = document.createElement("img");
let cont =document.querySelector(".container")
cont.append(image);
// function getData (){

// fetch(`${BASE_URL}/random`)
// .then((Response)=>Response.json())
// .then((data)=>{
//     console.log(data);

// })
// }
setInterval(() => {
  fetch(`${BASE_URL}/random`)
    .then((response) => response.json())
    .then((data) => (image.src = data?.message));
}, 2000);


cont.style.display ="flex"
cont.style.flexDirection ="column"
cont.style.justifyContent="center";
cont.style.alignItems="center"
cont.style.height ="100%"
image.style.width ="300px"
image.style.height ="300px"
image.style.borderRadius ="10px"
