const BASE_URL = `http://localhost:8080/posts`;
let search = document.querySelector("#search");
let cards = document.querySelector(".cards");
let home = null;
let homeCopy = null;

async function getAllData() {
  let res = await axios(`${BASE_URL}`);

  home = res.data;
  homeCopy = structuredClone(home);
  drawCards(res.data);
}

getAllData();
async function drawCards(arr) {
  cards.innerHTML = ``;
  arr.forEach((element) => {
    cards.innerHTML += `
    <div class="card">
            <h4>${element.title}</h4>
            <h5> ${element.body.slice(0, 100)}...<a href="details.html?id=${
      element.id
    }">Read more</a></h5>
            <p>written by Lorem</p>
            <diaxv class="btn">
              <button ${element.id} onclick=deleteFunction(${
      element.id
    },this) class="delete">delete</button>
              <a href="blog.html?id=${element.id}" class="edit">edit</a>
            </diaxv>
          </div>
    `;
  });
}
axios(`http://localhost:8080/posts`).then((res) => {
  drawCards(res.data);
});

async function deleteFunction(id, btn) {
  if (window.confirm("Are u sure to delete blog??")) {
    await axios.delete(`${BASE_URL}/${id}`);
    btn.closest("div").remove();
  }
}

search.addEventListener("input", function (e) {
  let filtered = home.filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawCards(filtered);
  console.log(filtered);
});
