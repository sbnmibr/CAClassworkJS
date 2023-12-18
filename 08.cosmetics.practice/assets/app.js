const BASE_URL ="http://localhost:8080/cards";
let cardsTwo=document.querySelector(".cardsTwo")
let loadMore=document.querySelector(".loadBtn")
let search =document.querySelector(".search")
let limit =3;
let productCopy=[]
async function getAllData (){
    let res = await axios (`${BASE_URL}`)
    productCopy=res.data
    drawCards(res.data.slice(0,limit))

}
getAllData()

async function drawCards(arr){
    cardsTwo.innerHTML=""
    arr.forEach(element => {
        cardsTwo.innerHTML+=`
        <div class="cardTwo">
        <img src="${element.image}" alt="">
        <h5>${element.title}</h5>
        <p>${element.price}</p>
       
        </div>
        `
    });
}

loadMore.addEventListener("click",function(){
    limit+=3
    drawCards(productCopy.slice(0,limit))
    if(limit>=productCopy.length){
        this.remove()
    }
})
search.addEventListener("input",function(e){
    let filtered=res.data.filter((item)=>{
        return item.title
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    })
})