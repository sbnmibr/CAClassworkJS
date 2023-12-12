const BASE_URL = `http://localhost:8080/posts`;
let form = document.querySelector("#form");
let titleInput = document.querySelector("#title");
let bodyInput = document.querySelector("#body");
let submitBtn = document.querySelector("#addBtn");
let id = new URLSearchParams(window.location.search).get("id");

if (id) {
  submitBtn.innerHTML = `EDIT`;
  submitBtn.style.background = "green";
  axios(`${BASE_URL}/${id}`).then((res) => {
    (titleInput.value = res.data.title), (bodyInput.value = res.data.body);
  });
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    id: Date.now(),
    title: titleInput.value,
    body: bodyInput.value,
  };
  if (!id) {
    axios.post(BASE_URL, obj);
    window.location.href = "./index.html";
  } else {
    axios.patch(`${BASE_URL}/${id}`,obj);
    window.location.href = "./index.html";
  }
});
