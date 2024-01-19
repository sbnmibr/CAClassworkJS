const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");
const menuBottom = document.querySelector(".menu-bottom");
const BASE_URL = "http://localhost:8000/dataCards";
const allBtns = document.querySelector(".btn");
const header = document.querySelector("header");
let menus = [];

async function getData() {
  const res = await axios(`${BASE_URL}`);
  menus = res.data;
  drawMenu(res.data);
}
getData();

async function drawMenu(arr) {
  console.log(arr);
  menuBottom.innerHTML = "";
  arr.forEach((element) => {
    menuBottom.innerHTML += `
        <div class="menu-card">
              <img src="${element.image}" alt="" />
              <div class="info">
                <h1>${element.title}</h1>
                <p>${element.description}</p>
              </div>
              <p>$ ${element.price}</p>
            </div>

        `;
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
});
// allBtns.forEach((element) => {
//   element.addEventListener("clcik", function () {
//     let filtered = home.filter(
//       (item) =>
//         item.category.toLocaleLowerCase() ===
//         element.textContent.toLocaleLowerCase()
//     );
//     drawMenu(filtered);
//   });
// });
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});

$(".loop").owlCarousel({
  center: true,
  items: 2,
  loop: true,
  margin: 10,
  responsive: {
    600: {
      items: 4,
    },
  },
});
$(".nonloop").owlCarousel({
  center: true,
  items: 3,
  loop: false,
  margin: 10,
  responsive: {
    600: {
      items: 4,
    },
  },
});

menu.addEventListener("click", function () {
  nav.classList.toggle("show");
  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});
