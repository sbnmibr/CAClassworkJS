const BASE_URL = "http://localhost:3000/data";
const cards = document.querySelector(".cards");
const search = document.querySelector(".search");
const sort = document.querySelector(".sort");
const loadMore = document.querySelector(".loadMore");

let home = [];
let homeCopy = [];
let limit = 3;

async function getData() {
  const res = await axios(`${BASE_URL}`);
  home = res.data;
  homeCopy = structuredClone(home);
  drawCards(homeCopy.slice(0, limit));
}
getData();
async function drawCards(arr) {
  console.log(arr);
  cards.innerHTML = "";
  arr.forEach((element) => {
    cards.innerHTML += `
        <div class="card">
        <img src="${element.image}" alt="" />

        <h3>${element.title}</h3>
        <p>price:${element.price}$</p>
        <p>
         ${element.description}
        </p>
        <div class="icons">
          <i class="fa-solid fa-minus" onclick=deleteFunction(${element.id},this)></i>
          <a href="form.html?id=${element.id}"><i class="fa-regular fa-pen-to-square"></i></a>
          <i class="fa-solid fa-circle-info"></i>
          <i class="fa-regular fa-heart" onclick="favFunction(${element.id})"></i>
        </div>
      </div>
        `;
  });
}

async function deleteFunction(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  this.closest("div").remove();
}

search.addEventListener("input", function (e) {
  e.preventDefault();
  let filtered = home.filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawCards(filtered);
});

sort.addEventListener("click", function () {
  let sorted;
  if (sort.innetText === "ascending") {
    sort.innetText = "descending";
    sorted = home.sort((a, b) => a.price - b.price);
  } else if (sort.innetText === "descending") {
    sort.innetText = "default";
    sorted = home.sort((a, b) => b.price - a.price);
  } else {
    sort.innetText = "ascending";
    sort = homeCopy;
  }
  drawCards(sorted);
});

loadMore.addEventListener("click", function () {
  limit += 3;
  drawCards(homeCopy.slice(0, limit));
  if ((limit) => homeCopy.length) this.remove();
});

async function favFunction(id) {
  let res = await axios(`${BASE_URL}/${id}`);
  let obj = await res.data;
}
