const countryName = new URLSearchParams(window.location.search).get("name");
const BASE_URl = "https://restcountries.com/v2/";
let card = document.querySelector(".card");

async function detailsFun() {
  const res = await axios(`${BASE_URL}/name/${countryName}`);
  console.log(res.data);
  card.innerHTML += `
    <div class="card-left">
    <img src="${res.data[0].flag}" alt="">

</div>
<div>
    <div class="divOne">
        <h3>${res.data[0].name}</h3>
        <h3>${res.data.population}</h3>
        <h3>${res.data.region}</h3>
        <h3>${res.data.capital}</h3>
        <h3>${res.data.borders}</h3>
        <h3></h3>
    </div>
    <div class="divTwo">
        <p>Top level Domains: ${res.data[0].topLevelDomain}</p>
        <p>Languages: ${res.data[0].languages[0].name}</p>

    </div>
</div>


           
            `;
}
detailsFun();

function backFunction(){
    window.history.back()
}
