let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = `http://localhost:8080/posts`;
const details = document.querySelector(".details");

async function detailsFun() {
  try {
    const res = await axios(`${BASE_URL}/${id}`);
    console.log(res.data);
    details.innerHTML += `
          <div class="card">
       <div class="two">
       <label for="">Title:</label>
       <h4>${res.data.title}</h4></div>
        <div class="two">
        <label for="">Body:</label>
        <h5>${res.data.body}</h5></div>
        <div class="two">
           <a href="details.html?id=${element.id}"> 
           <label for="">Author:</label>
         <p> by Lorem</p></div>
             <div class="two">
             Id:
             <h3>${res.data.id}</h3></div>
             <button onclick=goBack() > go back</button> 
            </div>
          `;
  } catch (error) {
    console.log(error);
  }
}
detailsFun();

function goBack() {
  window.history.back();
}
