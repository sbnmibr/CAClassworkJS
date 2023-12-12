let form = document.querySelector(".form");
let allInput = document.querySelectorAll(".allInput");

let arr = JSON.parse(localStorage.getItem("arr")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let bool = arr.some(
    (item) =>
      item.userName === allInput[0].value || item.email === allInput[1].value
  );
  if (!bool) {
    let obj = {
      userName: allInput[0].value,
      email: allInput[1].value,
      password: allInput[2].value,
      id: Date.now(),
    };
    arr.push(obj);
    localStorage.setItem("arr", JSON.stringify(arr));
  } else{
    window.alert("username or email already used");
  }
   allInput.forEach((item)=>{
    item.value =""
   })
   window.location="login.html"
});
