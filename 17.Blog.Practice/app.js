
const BASE_URL = `http://localhost:8080/posts`;

const cards =document.querySelector(".cards")

fetch(`${BASE_URL}/`)
  .then((response) => response.json())
  .then((data) => {
    drawCards(data);
  })
  .catch((err) => {
    console.log(err);
  });

  function drawCards (arr){
    cards.innerHTML =""
    arr.forEach(element => {
        cards.innerHTML = `
        <div class="card">
            <h4>${element.name}</h4>
            <h5>${element.body.slice(0,100)}... <a href="">Read more</a></h5>
            </p>${element.description}</p>
            <div class="btn">
              <button class="delete">delete</button>
              <button class="edit">edit</button>
            </div>
          </div>
        `
    });
  }
