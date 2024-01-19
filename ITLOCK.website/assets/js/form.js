const BASE_URL = " http://localhost:3000/data";
const form = document.querySelector("form");
const titleInput = document.querySelector(".title");
const DescInput = document.querySelector(".desc");
const fileInput = document.querySelector(".file");

let id = new URLSearchParams(window.location.search).get("id");

async function getData() {
  const res = await axios(`${BASE_URL}/${id}`);
  titleInput = res.data.title;
  DescInput = res.data.desc;
}

if (id) {
  getData();
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    id: Date.now(),
    image: `./assets/image/${fileInput.value.split("\\")[2]}`,
    title: titleInput.value,
    desc: DescInput.value,
  };
  if (!id) {
    if (titleInput.value != "" && DescInput.value != "") {
      await axios.post(`${BASE_URL}`, obj);
    } else {
      window.alert("doldur !!!!");
    }
  } else {
    await axios.patch(`${BASE_URL}/${id}`, obj);
  }

  window.location = "index.html";
});
