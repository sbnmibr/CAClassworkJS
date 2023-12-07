const BASE_URL = "https://fakestoreapi.com/products";
const btnOne = document.querySelector(".btn1");
const btnTwo = document.querySelector(".btn2");
const btnThree = document.querySelector(".btn3");
const btnFour = document.querySelector(".btn4");
const cont = document.querySelector(".container");

async function getAllData(categoryName) {
  console.log(categoryName);
  try {
    const response = await axios(`${BASE_URL}/${categoryName}`);
    drawCards(response.data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

function drawCards(arr) {
  cont.innerHTML = "";
  arr.forEach((element) => {
    cont.innerHTML += `
      
      <div class="card">
            <img src="${element.image}" alt="">
            <p>${element.description.slice(0, 20)}</p>
            <h5>${element.price}</h5>
            <a  href="details.html?id=${element.id}"class="details">details</a>
        </div>
      
          `;
  });
}


getAllData("");

btnOne.addEventListener("click", function () {
  getAllData("category/electronics");
});

btnTwo.addEventListener("click", function () {
  getAllData("category/jewelery");
});
btnThree.addEventListener("click", function () {
  getAllData("category/men's%20clothing");
});
btnFour.addEventListener("click", function () {
  getAllData("category/women's%20clothing  ");
});

