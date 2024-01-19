const BASE_URL = "http://localhost:8080/data";
const form = document.querySelector("form");
const titleInput = document.querySelector(".title");
const priceInput = document.querySelector(".price");
const descInput = document.querySelector(".description");
const fileInput = document.querySelector(".file");

let id = new URLSearchParams(window.location.search).get("id");

async function getData() {
  const res = await axios(`${BASE_URL}/${id}`);
  titleInput.value = res.data.title;
  priceInput.value=res.data.price;
  descInput.value=res.data.description
}

if (id) {
  getData();
}

form.addEventListener("submit", async function (e) {
    e.preventDefault()
  let obj = {
    title: titleInput.value,
    price: priceInput.value,
    description: descInput.value,
    image: `./assets/image/${fileInput.value.split("\\")[2]}`,
  };

  if (!id) {
    if (titleInput.value != "" && descInput.value != "" && priceInput.value != "") {
        await axios.post(`${BASE_URL}`,obj)
    } else {
        window.alert("not empty!!!!");
        
      }
    } else {
      await axios.post(`${BASE_URL}/${id}`, obj);
    }
    window.location = "index.html";
  }
);
