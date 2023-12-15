// let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";
let form = document.querySelector("form");
let divElem = document.querySelector(".def");
let searchInput = document.querySelector(".searchInput");

async function getAllData(word) {
  try {
    let res = await axios(`${BASE_URL}/${word} `);
    drawCard(res.data);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

function drawCard(arr) {
  divElem.innerHTML = "";
  arr.forEach((element) => {
    console.log(element);
    divElem.innerHTML += `
       
        <div class="headIcon">
            <p>${element.word}</p>
            <i onclick="playSound(this)" class="fa-solid fa-volume-high"> <audio src="${element.phonetics[0]?.audio}"></audio></i>
           </div>
           <div class="definition">
            <h3>${element.meanings[0]?.definitions[0].definition}</h3>
            <p></p>
           
           </div>
        `;
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getAllData(searchInput.value);
});

function playSound(icon) {
  // console.log(icon.querySelector("audio"));
  icon.querySelector("audio").play();
}
