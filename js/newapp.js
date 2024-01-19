const $menus = document.querySelectorAll(".navbar_links > a");
const sections = document.querySelectorAll(".section");
const sectionsArray = Array.from(sections);

let nowIdx = 0;
let oldIdx = nowIdx;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = sectionsArray.indexOf(entry.target);
        setActiveIndex(index);
      }
    });
  },
  { threshold: 0.5 }
);
sectionsArray.forEach((section) => observer.observe(section));

$menus.forEach(($menu, idx) => {
  $menu.addEventListener("click", (evt) => {
    evt.preventDefault();

    oldIdx = nowIdx;
    nowIdx = idx;

    // on 클래스 삭제 및 추가
    $menus[oldIdx].classList.remove("on");
    $menus[nowIdx].classList.add("on");

    window.scrollTo({
      left: 0,
      top: sectionsArray[idx].offsetTop,
      behavior: "smooth",
    });
  });
});

function setActiveIndex(index) {
  oldIdx = nowIdx;
  nowIdx = index;

  $menus[oldIdx].classList.remove("on");
  $menus[nowIdx].classList.add("on");
}

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

//모바일 ver 앵커클릭시 이동버튼
const $mobileNav = document.querySelectorAll(".navbar_menu > a "); // 모바일앵커그랩
$mobileNav.forEach(($menu, idx) => {
  $menu.addEventListener("click", (evt) => {
    evt.preventDefault();

    oldIdx = nowIdx;
    nowIdx = idx;

    // on 클래스 삭제 및 추가
    $mobileNav[oldIdx].classList.remove("on");
    $mobileNav[nowIdx].classList.add("on");

    window.scrollTo({
      left: 0,
      top: sectionsArray[idx].offsetTop,
      behavior: "smooth",
    });
  });
});
