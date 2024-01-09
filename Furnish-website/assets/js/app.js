const BASE_URL = "http://localhost:8000";
const cards = document.querySelector(".cards");
const search = document.querySelector(".search");
const loadMore = document.querySelector(".loadMore");
const header = document.querySelector("header");

let home = null;
let homeCopy = null;
let limit = 4;
let serviceCopy = [];
async function getData() {
  const res = await axios(`${BASE_URL}/cards`);
  home = res.data;
  homeCopy = structuredClone(home);
  serviceCopy = res.data;
  drawCards(serviceCopy.slice(0, limit));
}
getData();
async function drawCards(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    cards.innerHTML += `
        <div class="cardOne card">
              <i class="fa-solid fa-hands-holding"></i>
              <h3>${element.title}</h3>
              <p>
              ${element.description}
              </p>
              <i class="fa-solid fa-trash" onclick="deleteFunction(${element.id},this)"></i>
              <i class="fa-regular fa-pen-to-square"></i>
            </div>
      `;
  });
}
search.addEventListener("input", function (e) {
  let filtered = home.filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawCards(filtered);
  console.log(filtered);
});

loadMore.addEventListener("click", function () {
  limit += 4;
  drawCards(serviceCopy.slice(0, limit));
  if ((limit) => serviceCopy.length) this.remove();
});

// function scrollFunction() {
//   if (document.body.scrollTop > 100 ) {
//         console.log("11111");
//     } else {
//         console.log("22222")
//         header.style.display = "block";
//         header.style.backgroundColor = "blue";
//     // header.style.display = "none";
//     // header.style.background = "";
//   }
// }
// scrollFunction();
// window.onscroll = function () {
// };

async function deleteFunction(id,btn){
    console.log(id);
    await axios.delete(`${BASE_URL}/cards/${id}`).catch(res=>console.log(res))
    // btn.remove()
}