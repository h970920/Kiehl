const images = [
  "./images/prod.png",
  "./images/prod2.png",
  "./images/prod3.png",
  "./images/prod4.png",
];

const $images__tex = [
  "../images/skin_tex.png",
  "../images/prod2tex.png",
  "../images/prod3tex.png",
  "../images/prod4tex.png",
];

let currentImageIndex = 0;

function updateImage() {
  const imageContainer = document.getElementById("imageContainer");
  const imgtexContainer = document.querySelector(".texture__img");

  // 이미지 업데이트 전에 페이드아웃 효과
  imageContainer.style.opacity = 0;
  imgtexContainer.style.opacity = 0;

  setTimeout(() => {
    imageContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
    imgtexContainer.style.backgroundImage = `url(${$images__tex[currentImageIndex]})`;

    // 이미지 업데이트 후 페이드인 효과
    setTimeout(() => {
      imageContainer.style.opacity = 1;
      imgtexContainer.style.opacity = 1;
    }, 300); // 이미지 업데이트 후 50ms 후에 페이드인 시작
  }, 300); // 이미지 업데이트 전에 300ms 후에 페이드아웃 완료
}

// 페이지 로드시 초기 이미지 설정
updateImage();

// 슬라이더 컨트롤 버튼에 이벤트 리스너 추가
const $nextButton = document.getElementById("nextButton");
const $prevButton = document.getElementById("prevButton");

$nextButton.addEventListener("click", function (event) {
  event.preventDefault();
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
  updateTextContent();
});

$prevButton.addEventListener("click", function (event) {
  event.preventDefault();
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
  updateTextContent();
});

/* 섹션1의 타이틀과 설명 그랩 */
const $title = document.querySelector(".product__title > h1");
const $text = document.querySelector(".product_text > span > p");

function updateTextContent() {
  // 텍스트 업데이트 전에 페이드아웃 효과
  $title.style.opacity = 0;
  $text.style.opacity = 0;

  setTimeout(() => {
    const titles = [
      "Kiehl's Ultra Facial Cream",
      `Kiehl's Clearly Corrective Dark Spot Solution`,
      "Ultra Facial Toner",
      "Ultra Facial Cleanser",
    ];
    const texts = [
      ` "Did you know that our skin is exposed to about 300 factors
    that can potentially irritate it on a daily basis? With a
    compromised skin barrier, our skin may appear dull and rough
    due to moisture loss. It's essential to address this issue
    with effective hydration for a revitalized and hydrated
    complexion."`,
      `
      "This advanced formula not only diminishes pre-existing pigmentation but also assists in inhibiting the formation of dark spots, unveiling a progressively translucent complexion each day. Infused with Activated C, it enhances the improvement of pigmentation, while White Birch Extract reinforces the skin's moisture retention. Mulberry Extract is incorporated to enhance skin transparency, providing care for a clear and luminous complexion.
      
      Crafted with a non-irritating transparent formula, free from artificial fragrances and colors, it gently nurtures the skin."`,
      `
      "A moisturizing toner with a milky texture that gently and hydratingly refines the skin. Plant-based moisturizing ingredients such as squalane, apricot kernel oil, sweet almond oil, and avocado oil strengthen the skin's natural moisture barrier, providing immediate soothing and moisturizing effects."`,
      `
      "A cleanser enriched with plant-derived surfactants, providing a gentle and thorough cleansing of impurities from the skin. Infused with apricot kernel oil, avocado oil, sweet almond oil, and other nourishing ingredients, it not only protects the skin's natural moisture barrier but also delivers a refreshing cleansing experience."`,
    ];

    $title.textContent = titles[currentImageIndex];
    $text.textContent = texts[currentImageIndex];

    // 텍스트 업데이트 후 페이드인 효과
    setTimeout(() => {
      $title.style.opacity = 1;
      $text.style.opacity = 1;
    }, 300); // 텍스트 업데이트 후 50ms 후에 페이드인 시작
  }, 300); // 텍스트 업데이트 전에 300ms 후에 페이드아웃 완료
}

/* 초기 텍스트 설정 */
updateTextContent();
