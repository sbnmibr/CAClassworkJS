// let fullName ="Shabnam";
// let age ="21"
// let skills = ["yatmaq","yemek","qacmaq"]
// localStorage.setItem("fullName","fullName")
// localStorage.setItem("skilss",skills)
// console.log(localStorage.getItem("fullName"));

let form =document.querySelector("form")
let fName =document.querySelector("#firstName")
let LName =document.querySelector("#lastName")
let address =document.querySelector("#address")

let users = JSON.parse(localStorage.getItem("users")) || [];
form.addEventListener("submit",function(e){
    e.preventDefault 
    
 let info  ={
    id:Date.now(),
    firstName: fName.value,
    lastName: LName.value,
    address:  address.value
 };
data.push(info)
localStorage.setItem("personObj", JSON.stringify(data));
 fName.value = ""
 LName.value =""
address.value =""
});