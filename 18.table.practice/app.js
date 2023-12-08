const tbody = document.querySelector("tbody");
const spinner = document.querySelector(".spinner");
const BASE_URL = `http://universities.hipolabs.com/search`;
const search = document.querySelector("#search");
const loader = document.querySelector(".loader");

async function getData() {
  loader.classList.add("show");
  let response = await axios(`${BASE_URL}?country=Italy`);
  loader.classList.remove("show");
  console.log(response.data);
  drawTable(response.data);
}

getData();

function drawTable(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML += `
                    
                        <td>${element.name}</td>
                        <td>${element.country}</td>
                        <td>${element.domains}</td>
                        <td><a href="">${element.web_pages}</a></td>
                        
                 
        `;
    tbody.append(trElem);
  });
}



search.addEventListener("input", async function (e) {
  loader.classList.add("show");
  await axios(`${BASE_URL}?country=Italy$name${e.target.value}`);
  loader.classList.remove("show");
  drawTable(response.data);
});


