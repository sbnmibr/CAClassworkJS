const BASE_URL = " http://localhost:3000/cards";
const tbody = document.querySelector("tbody");
const idInput = document.querySelector(".idInput");
const titleInput = document.querySelector(".titleInput");
const priceInput = document.querySelector(".priceInput");
const deleteIcon = document.querySelector(".deleteIcon");
const editIcon = document.querySelector(".editIcon");
let submitBtn = document.querySelector(".submit");
let form = document.querySelector("form");
let newId = null;

async function getData() {
  const res = await axios(`${BASE_URL}`);
  console.log(res.data);
  drawTable(res.data);
}

getData();
function drawTable(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `       <td>${element.id}</td>
        <td><img src="${element.image}"</td>
            <td>${element.Name}</td>
            <td>${element.price}</td>
              <td><div class="icon">
              <i   class="fa-regular fa-trash-can deleteIcon" onclick="deletefunc(${element.id},this)"></i>
              <i class="fa-regular fa-pen-to-square editIcon" onclick=edit(${element.id})></i>
          </div></td>
         `;
    tbody.append(trElem);
  });
}

async function deletefunc(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  btn.closest("tr").remove();
}

if (id) {
  axios(`${BASE_URL}/${id}`).then((res) => {
    (idInput.value = res.data.id),
      (titleInput.value = res.data.Name),
      (priceInput.value = res.data.price);
  });
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    id: Data.now(),
    Name: titleInput.value,
    price: priceInput.value,
  };
  if (!id) {
    await axios.post(BASE_URL, obj);
  } else {
    await axios.patch(`${BASE_URL}/${id}`, obj);
  }
});

async function edit(id) {
  newId = id;
  
}
