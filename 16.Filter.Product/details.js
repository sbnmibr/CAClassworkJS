let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "https://fakestoreapi.com/products";
const details= document.querySelector(".details")

fetch(`${BASE_URL}/${id}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    details.innerHTML = `
    <img src="${data.image}" alt="">
        <h3>${data.title}</h3>
        <h3>${data.description}</h3>
        <h3>${data.price}</h3>
       
        <button onclick=goBack()>go back</button>
    `;
  });

 
  function goBack() {
    window.history.back();
  }