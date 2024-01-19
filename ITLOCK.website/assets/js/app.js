const BASE_URL = "http://localhost:3000/data";
const cards = document.querySelector(".brands-cards");
const loadMore = document.querySelector(".loadMore");
const searchInput = document.querySelector(".search");
const headerTop = document.querySelector(".header-top");
const sort =document.querySelector(".sort")
const headerBottom = document.querySelector(".header-bottom");

let home = null;
let homeCopy = null;
let serviceCopy = [];
let limit = 3;

async function getData() {
  const res = await axios(`${BASE_URL}`);
  home = res.data;
  homeCopy = structuredClone(home);
  serviceCopy = res.data;
  console.log(res.data);
  drawCards(serviceCopy.slice(0, limit));
  // drawCards(res.data)
}
getData();

async function drawCards(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    cards.innerHTML += `
    <div class="card">
    <img src="${element.image}" alt="" />
    <h2>${element.title}</h2>
    <p>${element.desc}</p>
    <i class="fa-solid fa-minus" onclick="deleteFunction(${element.id},this)"></i>
  <a href="form.html?id=${element.id}">
  <i class="fa-regular fa-pen-to-square"></i>
  </a>
   
  </div>
    `;
  });
}
loadMore.addEventListener("click", async function () {
  limit += 3;
  drawCards(serviceCopy.slice(0, limit));
  if ((limit = serviceCopy.length)) this.remove();
});
searchInput.addEventListener("input", function (e) {
  let filtered = home.filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawCards(filtered);
});



async function deleteFunction(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  btn.closest("div").remove();
}


// sort.addEventListener("click",function(){
//   if(sort.innerHTML="ascending"){
//     serviceCopy=serviceCopy.sort((a,b))
//   }
// })