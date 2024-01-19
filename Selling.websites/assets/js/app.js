const BASE_URL = "http://localhost:3000/data";
const FAV_URL = "http://localhost:3000/fav";
const cards = document.querySelector(".product-cards");
const header = document.querySelector("header");
const menu = document.querySelector("#menyIcon");
const nav = document.querySelector("nav");
const goTop = document.querySelector(".goTop");

let home = [];
let homeCopy = [];

async function getData() {
  const res = await axios(`${BASE_URL}`);
  home = res.data;
  homeCopy = structuredClone(home);
  drawCards(homeCopy);
}
getData();
async function drawCards(arr) {
  cards.innerHTM = "";
  arr.forEach((element) => {
    cards.innerHTML += `
        <div class="card">
              <div class="all">
                <img src="${element.image}" alt="" />
                <div class="card-empty"></div>
              </div>
              <h3>${element.title}</h3>
              <div class="mini">
                <div class="one">
                  <i class="fa-regular fa-star"></i>
                  <p>5.0</p>
                </div>
                <div class="one">
                  <i class="fa-regular fa-heart"></i>
                  <p>29</p>
                </div>
              </div>
              <p>${element.description}</p>
              <div class="card-btns">
              <i class="fa-regular fa-heart" onclick="favFunction(${element.id})"></i>
                <button class="btn2">WIEW</button>
              </div>
            </div>
        `;
  });
}

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("header-scroll");
      goTop.classList.add("active");
    } else {
      header.classList.remove("header-scroll");
      goTop.classList.remove("active");
    }
  });

menu.addEventListener("click", function () {
  nav.classList.toggle("show");
  if (this.classList.contains("fa-bars")) {
    this.className = "fa-solid fa-xmark";
  } else {
    this.className = "fa-solid fa-bars";
  }
});



async function favFunction(id) {
  let res = await axios(`${BASE_URL}/${id}`);
  let obj=await res.data
  window.location.href = "fav.html";
  await axios.post(FAV_URL,obj)
}
