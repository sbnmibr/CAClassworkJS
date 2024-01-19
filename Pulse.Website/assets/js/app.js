const BASE_URL = "http://localhost:3000/data";
const menu = document.querySelector(".menu-bottom");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const nav=document.querySelector("nav")
let menus = [];
async function getData(endpoint) {
  const response = await axios(`${BASE_URL}`);
  menus = response.data;
  drawMenu(response.data);
}

getData("data");

function drawMenu(arr) {
  menu.innerHTML = "";
  arr.forEach((element) => {
    menu.innerHTML += `
        <div class="mini">
                <h1>${element.title}</h1>
                <div class="line">
                  <p>${element.description}</p>
                  <p>.............................</p>
                  <h5>$${element.price}</h5>
                </div>
              </div>


        `;
  });
}
btn1.addEventListener("click", function () {
  let filtered = menus.filter((item) => item.category === "breakfast");
  drawMenu(filtered);
});
btn2.addEventListener("click", function () {
  let filtered = menus.filter((item) => item.category === "lunch");
  drawMenu(filtered);
});
btn3.addEventListener("click", function () {
  let filtered = menus.filter((item) => item.category === "dinner");
  drawMenu(filtered);
});
btn4.addEventListener("click", function () {
  let filtered = menus.filter((item) => item.category === "Brunch");
  drawMenu(filtered);
});
