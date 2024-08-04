const BASE_URL = "http://localhost:3000/data";
const titleInput = document.querySelector(".title");
const descInput = document.querySelector(".description");
const fileInput = document.querySelector(".file");
const submit = document.querySelector(".submit");
const form = document.querySelector("form");

const tbody = document.querySelector("tbody");
let home = [];
let homeCopy = [];

async function getData() {
  const res = await axios(`${BASE_URL}`);
  home = res.data;
  homeCopy = structuredClone(home);
  drawTable(homeCopy);
}
getData();
async function drawTable(arr) {
  tbody.innerHTML = "";
  arr.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML += `
         
          <td>     <img src="${element.image}" alt=""></td>
          <td>${element.title}</td>
          <td>${element.description}</td>
          <td><button class="delete" onclick="deletefunction(${element.id},this)"> Delete</button></td>
          <td><a href="form.html?id=${element.id}" class="edit">edit</a></td>

         
     
     
        `;
    tbody.append(trElem);
  });
}

async function deletefunction(id, btn) {
  if (window.confirm("silmekk olmazz!!!!")) {
    await axios.delete(`${BASE_URL}/${id}`);
    this.closest("tr").remove();
  }
}

let editId = null;

async function editBtn(id) {
  editId = id;
  const res = await axios(`${BASE_URL}/${id}`);
  titleInput.value = res.data.title;
  descInput.value = res.data.description;
}
// if(editId){
//   getData()
// }

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    title: titleInput.value,
    description: descInput.value,
    image: `./assets/image/${fileInput.value.split("\\")[2]}`,
  };
  if (!editId) {
    if (titleInput.value != "" && descInput.value != "") {
      await axios.post(`${BASE_URL}`, obj);
    } else {
      window.alert("nooo");
    }
  } else {
    await axios.patch(`${BASE_URL}/${editId}`, obj);
  }
});
