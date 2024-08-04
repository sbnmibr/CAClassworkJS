const search = document.querySelector("#search");
const cards = document.querySelector(".cards");
const select = document.querySelector("select");
const button = document.querySelector(".btn");
const sectionBtn = document.querySelector(".section-btn");
const icon = document.querySelector(".fa-magnifying-glass");
const BASE_URL = "https://rescountires.com/v3.1"

let arr = [];
let copyArr = [];

async function getAllData(endpoint) {
  const res = await axios(`${BASE_URL}/${endpoint}`);
  //   console.log(res.data);
  let data = res.data;
  arr = res.data;
  copyArr = structuredClone(arr);
  drawCards(data);
}
getAllData("all");

function drawCards(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    cards.innerHTML += `
        <div class="card">
       <a href="details.html?name=${element.name}"> <img src="${element.flags.svg}" alt="">
       <h3>${element.name}</h3>
       <p><b>Population:${element.population}</b>20909</p>
       <p><b>Region:${element.region}</b>20909</p>
       <p><b>Capital:${element.capital}</b>20909</p></a>
    </div>
        `;
  });
}

search.addEventListener("input", async function (e) {
  const res = await axios(`${BASE_URL}/all`);
  let filtered = res.data.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawCards(filtered);
});


select.addEventListener("change", async function (e) {
  if (e.target.value != "all") {
    getAllData(`region/${e.target.value}`);
  } else {
    getAllData(`${e.target.value}`);
  }
});



if (localStorage.getItem("darkMode") == "true") {
  document.body.classList.add("dark-mode");
}

button.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (localStorage.getItem("darkMode") === "true") {
    localStorage.setItem("darkMode", false);
  } else {
    localStorage.setItem("darkMode", true);
  }
});



sectionBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let sorted;
  if (sectionBtn.innerText === "Ascending") {
    sectionBtn.innerText = "Descending";
    sorted = arr.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sectionBtn.innerText === "Descending") {
    sectionBtn.innerText = "Default";
    sorted = arr.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    sectionBtn.innerText = "Ascending";
    sorted = copyArr;
  }
  drawCards(sorted);
}); 