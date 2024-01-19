const $wrap = document.getElementById("wrap");
const $section = document.getElementsByClassName("section");

let page = 0; // 영역 포지션 초기값
const lastPage = $section.length - 1; // 마지막 페이지

window.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      page++;
    } else if (e.deltaY < 0) {
      page--;
    }
    if (page < 0) {
      page = 0;
    } else if (page > lastPage) {
      page = lastPage;
    }
    console.log(e.deltaY);
    $wrap.style.top = page * -100 + "vh";
  },
  { passive: false }
); // 디폴트 기능 제거 - 스크롤

//버거버튼 클릭

const navbarBurger = document.querySelector(".navbar_burger");
const navbarburgerback = document.querySelector(".navbar_burger_back");
const navbarMenu = document.querySelector(".navbar_menu");
const navbarOverlay = document.querySelector(".navbar_overlay");

navbarBurger.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  navbarOverlay.classList.toggle("active");
});

navbarburgerback.addEventListener("click", () => {
  navbarMenu.classList.remove("active");
  navbarOverlay.classList.remove("active");
});

navbarOverlay.addEventListener("click", () => {
  navbarMenu.classList.remove("active");
  navbarOverlay.classList.remove("active");
});

// 상단메뉴 클릭 이벤트

const $tNav = document.querySelector(".navbar_links > a");
