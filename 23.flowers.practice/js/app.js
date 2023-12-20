const BASE_URL = "http://localhost:3000/cards";
const tbody = document.querySelector("tbody");

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
    trElem.innerHTML = 
    `       <td>${element.id}</td>
        <td><img src="${element.image}"</td>
            <td>${element.Name}</td>
            <td>${element.price}</td>
              <div class="icon">
            <i class="fa-regular fa-trash-can" onclick="deletefunc(${element.id},this)"></i>
            <i class="fa-regular fa-pen-to-square"></i>
        </div>
         `;
    tbody.append(trElem);
  });
}

async function deletefunc(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  btn.closest("tr").remove();
}
