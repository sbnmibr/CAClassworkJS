const BASE_URL = " http://localhost:8000/data";
const details = document.querySelector(".details");
let id = new URLSearchParams(window.location.search).get("id");

async function detailsFunction() {}
try {
  const res =  axios(`${BASE_URL}/${id}`);
  details.innerHTML += `
    <div class="card">
          

    <div class="left">
      <img src="${res.data.image}" alt="">
    </div> 
    
    <div class="right">
      
      <h1>Title:${res.data.title}</h1>
      <p>Description:${res.data.description}</p>
      <p>price:${res.data.price}</p>
      <button class="goBack" onclick="goBack()">Go back</button>
    </div>           
    </div>`;
} catch (error) {
  console.log(error);
}
detailsFunction()
  async function goBack(){
    window.history.back="./index.html"
  }
