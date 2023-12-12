let form = document.querySelector("form");
let allInput = document.querySelectorAll(".allInput");
let faEye = document.querySelector(".fa-eye");
let arr = JSON.parse(localStorage.getItem("arr")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let array = arr.find(
    (item) =>
      item.email === allInput[0].value && item.password === allInput[1].value
  );
  console.log(array);
  if (array) {
    window.location = "home.html";
  } else {
    window.alert("username or password is not correct!!");
  }
  allInput.forEach((item) => {
    item.value = "";
  });
});

faEye.addEventListener("click", function () {
  console.log(this.className);
  if (this.className === "fa-solid fa-eye") {
    password.type = "text";
    this.className = "fa-regular fa-eye-slash";
  } else {
    password.type = "password";
    this.className = "fa-solid fa-eye";
  }
});
