const BASE_URL = "http://localhost:8000/data";
const titleInput = document.querySelector(".title");
const form = document.querySelector("form");
const descInput = document.querySelector(".description");
const fileInput = document.querySelector(".file");
const numberInput = document.querySelector(".price");
const submit = document.querySelector(".submit");
let id = new URLSearchParams(window / location.search).get("id");

async function getData() {
  const res = await axios(`${BASE_URL}/${id}`);
  titleInput = res.data.title;
  descInput = res.data.description;
  // numberInput = res.data.price;
}
if (id) {
  getData();
}
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    id: Date.now(),
    title: titleInput.value,
    description: descInput.value,
    // price:numberInput.value,
    image: `./assets/image/${fileInput.value.split("\\")[2]}`,
  };
  if (!id) {
    if (titleInput.value != "" && descInput.value != "" ) {
      await axios.post(`${BASE_URL}`, obj);
    } else {
      window.alert("not empty!!!!");
    }
  } else {
    await axios.post(`${BASE_URL}/${id}`, obj);
  }
  window.location = "index.html";
});
