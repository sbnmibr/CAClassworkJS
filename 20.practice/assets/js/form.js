const BASE_URL = `http://localhost:8080/users`;
let form = document.querySelector("form");
let allInput = document.querySelectorAll("input");
let id = new URLSearchParams(window.location.search).get("id");
let submitBtn = document.querySelector(".submit");

console.log(allInput);

if (id) {
  submitBtn.innerHTML = `EDIT`;
  submitBtn.style.background = "green";
}
console.log(id);

async function getData() {
  const res = await axios(`${BASE_URL}/${id}`);
  console.log(res.data);
  allInput[0].value = res.data.name;
  allInput[1].value = res.data.surname;
  allInput[2].value = res.data.email;
}

getData();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    name: allInput[0].value,
    surname: allInput[1].value,
    email: allInput[2].value,
  };
  
  if (!id) {
    axios.post(BASE_URL, obj);
    window.location.href = "index.html";
  } else {
    axios.patch(`${BASE_URL}/${id}`, obj);
  }
});
