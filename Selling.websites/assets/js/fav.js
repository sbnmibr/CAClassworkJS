const FAV_URL = "http://localhost:3000/fav";
const cards = document.querySelector(".cards");
let home = [];
let homeCopy = [];

async function getData() {
  const res = await axios(`${FAV_URL}`);
  home = res.data;
  homeCopy = structuredClone(home);
  drawCards(homeCopy);
}
getData();

async function drawCards(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    cards.innerHTML += `<div class="card">
        <img src="${element.image}" alt="" />
        <h1>${element.title}</h1>
        <p>${element.description}</p>
        <i class="fa-solid fa-heart" onclick="deleteFunction(${element.id},this)"></i>
      </div>
        
        `;
  });
}
async function deleteFunction(id,btn){
    await axios.delete(`${FAV_URL}/${id}`)
    this.closest("div").remove()
    // window.history.back="index.html"
}