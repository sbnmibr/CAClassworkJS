let countryName = new URLSearchParams(window.location.search).get("name");
const section = document.querySelector(".details");
const btn = document.querySelector(".btn");
const button = document.createElement("button");
button.innerText = "Go Back";

button.addEventListener("click", goBack);
section.before(button);
console.log(countryName);
const BASE_URL = "https://rescountires.com/v3.1"


async function detailsData() {
  const res = await axios(`${BASE_URL}/name/${countryName}`);
  console.log(BASE_URL);
  section.innerHTML = `
    <div class="hero-banner-section-right">
        <img src="${res.data[0].flag}" width="300" alt="" />
    </div>
    <div class="hero-banner-section-left">
        <div class="text">
                <p><b>Native Name:</b>${res.data[0].name}</p>
                <p><b>Population:</b>${res.data[0].population}</p>
                <p><b>Region:</b>${res.data[0].region}</p>
                <p><b>Capital:</b>${res.data[0].capital}</p>
                <span>Border Countries:${res.data[0].borders}</span>
        </div>
        <div class="text">
                <p><b>Top Level Domain: </b>${res.data[0].topLevelDomain}</p>
                <p><b>Languages:${res.data[0].languages[0].name}</b</p>
        </div>
    </div>
   
    `;
}

detailsData();

function goBack() {
  window.history.back();
}

if (localStorage.getItem("darkMode") == "true") {
  document.body.classList.add("dark-mode");
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (localStorage.getItem("darkMode") === "true") {
    localStorage.setItem("darkMode", false);
  } else {
    localStorage.setItem("darkMode", true);
  }
});