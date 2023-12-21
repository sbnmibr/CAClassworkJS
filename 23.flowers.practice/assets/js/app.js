const BASE_URL = " http://localhost:8000/cards";
const cards = document.querySelector(".pricingCards");
let searchInput = document.querySelector(".search");
let sort = document.querySelector(".sortBtn");
let loadMore = document.querySelector(".loadBtn");
let allData = [];

let copyArr = [];
let limit = 3;

async function drawCards(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    cards.innerHTML += `
     <div class="card">
              <img src="${element.image}" alt="" />
              <div class="pricing-text">
                <h3>${element.Name}</h3>
                <p>${element.price}</p>
              </div>
            </div> 
           
   
    `;
  });
}
async function getAllData() {
  let res = await axios(`${BASE_URL}`);
  allData = res.data;
  copyArr = structuredClone(allData);

  searchData = searchInput.value ? searchData : allData;
  drawCards(searchData.slice(0, limit));
}
getAllData();

searchInput.addEventListener("input", function (e) {
  allData = searchData;
  searchData = searchData.filter((item) => {
    return item.Name.toLocaleLowerCase().includes(
      e.target.value.toLocaleLowerCase()
    );
  });
});

sort.addEventListener("click", function () {
  let sorted;
  console.log(allData);
  if (sort.innerHTML === `sort`) {
    sorted = allData.sort((a, b) => a.price - b.price);
    sort.innerHTML = `ascending`;
  } else if (sort.innerHTML === `ascending`) {
    sorted = allData.sort((a, b) => b.price - a.price);
    sort.innerHTML = `descending`;
  } else {
    sort.innerHTML = `sort`;
    sorted = copyArr;
  }
  drawCards(sorted);
});

loadMore.addEventListener("click", function () {
  limit += 3;
  if (limit >= searchData.length) this.remove();
  getAllData();
});
