const BASE_URL = `http://localhost:8080/users`;
const tbody = document.querySelector("tbody");

async function table() {
  let res = await axios(`${BASE_URL}`);
  drawTable(res.data)
}

table();
function drawTable(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML += `
        <td>${element.id}</td>
        <td><img src="${element.userphoto}"></td>
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.email}</td>
        <td>${element.date}</td>
        <td>
        <a href="./form.html?id=${element.id}"><button class="editBtn"> Edit</button></a>
        <button class="deleteBtn" onclick="deleteFunc(${element.id}, this)" >Delete</button>
        <button  class="addBtn">Add fav</button>
        </td>
        `;
    tbody.append(trElem);
  });
}

async function deleteFunc(id, btn) {
  console.log(id);
  await axios.delete(`${BASE_URL}/${id}`);
  btn.closest("tr").remove()
}

