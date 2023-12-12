const logBtn = document.querySelector(".logBtn");
window.addEventListener("load", function () {
  localStorage.getItem("arr") ? null : (window.location = "login.html");
});
logBtn.addEventListener("click", function () {
  confirm("are you sure log out?") && localStorage.clear();
  window.location.reload();
});
