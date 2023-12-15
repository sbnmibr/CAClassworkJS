const BASE_URl = "https://restcountries.com/v2/all";
let cards = document.querySelector(".cards");
let search = document.querySelector(".search");
let select = document.querySelector("#select");
let icon = document.querySelector(".icon");

async function getData() {
  let res = await axios(`${BASE_URl}`);
  drawCards(res.data);
}

getData();

async function drawCards(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    cards.innerHTML += `
        <div class="card">
         <a href="detalis.html?name=${element.name}">
          <img src="${element.flags.svg}" alt="" />
          <h3>${element.name}</h3>
            <h5>populatin: ${element.population}</h5>
            <h5>Region:${element.region} </h5>
            <h5>Capital:${element.capital}</h5>
         </a>
        </div>

        `;
  });
}

search.addEventListener("input", async function (e) {
  const res = await axios(`${BASE_URl}`);
  let filtered = res.data.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawCards(filtered);
  //   console.log(filtered);
});
select.addEventListener("change", async function (e) {
 if(e.target.value != "all"){
    getData(`region/${e.target.value}`)
 }else{
    getData(`${e.target.value}`)
 }
});

function darkFunction() {
  document.body.classList.toggle("dark-mode");
}
