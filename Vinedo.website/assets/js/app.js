const BASE_URL = "http://localhost:8000/data ";
const cards = document.querySelector(".cards");
const loadMore = document.querySelector(".loadMore");
const search = document.querySelector(".search");
const sort = document.querySelector(".sort");
let home = [];
let homeCopy = [];
let limit = 4;

async function getData() {
  const res = await axios(`${BASE_URL}`);

  home = res.data;
  console.log(home);
  homeCopy = structuredClone(home);
  console.log(homeCopy);
  drawCards(home.slice(0, limit));
}
getData();
async function drawCards(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    cards.innerHTML += `
        <div class="card">
              <div class="mini">
               
                <div class="iconsOne">
                <a href="form.html? id=${element.id}">  <i class="fa-regular fa-pen-to-square"></i> </a>
                  <i class="fa-solid fa-minus" onclick="deleteFunction(${element.id},this)"></i>
                 
                 <a href="details.html?if=${element.id}"> <i class="fa-solid fa-circle-info" ></i></a>
                </div>
              </div>
              <img
                src="${element.image}"
                alt=""
              />
              <div class="card-text">
                <p>${element.title}</p>
                <h5>${element.description}</h5>
                <p>$${element.price}</p>
                <div class="icons">
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </div>
            </div>
        `;
  });
}

loadMore.addEventListener("click", function () {
  limit += 4;
  drawCards(home.slice(0, limit));
  if ((limit) => home.length) this.remove();
});

search.addEventListener("input", async function (e) {
  e.preventDefault();
  const res = await axios(`${BASE_URL}`);
  let filtered = res.data.filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
//   drawCards(filtered);
console.log(filtered);
});


sort.addEventListener("click", function () {
  let sorted;
  if (sort.innerText === "ascending") {
    sort.innerText = "descending";
    sorted = home.sort((a, b) => a.price - b.price);
  } else if (sort.innerText === "descending") {
    sort.innerText = "default";
    sorted = home.sort((a, b) => b.price - a.price);
  } else {
    sort.innerText = "ascending";
    sorted = homeCopy;
    console.log("selale");
  }
  drawCards(sorted);
});


async function deleteFunction(id,btn){
  await axios.delete(`${BASE_URL}/${id}`)
  this.closest("div").remove()
}