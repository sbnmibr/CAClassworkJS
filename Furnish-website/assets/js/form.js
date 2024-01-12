const BASE_URL = "http://localhost:8000/cards";
const form = document.querySelector("#form");
const titleInput = document.querySelector("#title");
const DesInput = document.querySelector("#description");
let Submit = document.querySelector("#addBtn");
let id =  new URLSearchParams(window.location.search).get("id");

async function getData() {
  const res = await axios(`${BASE_URL}/${id}`);
  (titleInput = res.data.title), (DesInput = res.data.description);
}
if (id) {
  getData();
}
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    id: Date.now(),
    title: titleInput.value,
    description: DesInput.value,
  };

  if (!id) {
    if (titleInput.value != "" && DesInput.value != "") {
      await axios.post(`${BASE_URL}`, obj);
    } else {
      window.alert("is not left blank!!!");
    }
  } else {
    await axios.patch(`${BASE_URL}/${id}`, obj);
  }

  window.location = "index.html";
});
