document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("gridContainer"); // 그리드 컨테이너 요소 가져오기
  const modal = document.getElementById("modal"); // 모달 요소 가져오기
  const modalContent = document.getElementById("modalContent"); // 모달 콘텐츠 요소 가져오기
  const closeBtn = document.getElementById("closeBtn"); // 닫기 버튼 요소 가져오기

  // 샘플 제품 데이터 (자신의 데이터로 교체 가능)
  const products = [
    { id: 1, name: "Cream", image: "/images/prod.png" },
    { id: 2, name: "Essence", image: "/images/prod2.png" },
    { id: 3, name: "Toner", image: "/images/prod3.png" },
    { id: 4, name: "Cleansing Foam", image: "/images/prod4.png" },
    { id: 5, name: "Cleansing Oil", image: "/images/prod5.png" },
    { id: 6, name: "Lip Balm", image: "/images/prod6.png" },
    { id: 7, name: "Sun Cream", image: "/images/prod7.png" },
    { id: 8, name: "Serum", image: "/images/prod8.png" },
    { id: 8, name: "Peel Toner", image: "/images/prod9.png" },
    // 필요에 따라 더 많은 제품 추가
  ];

  // 제품 카드를 생성하는 함수
  function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" width="100%">
          <p>${product.name}</p>
        `;
    card.addEventListener("click", () => openModal(product));
    return card;
  }

  // 상세 제품 보기가 있는 모달을 열기 위한 함수
  function openModal(product) {
    modalContent.innerHTML = `
          <img src="${product.image}" alt="${product.name}" width="100%">
          <h2>${product.name}</h2>
          <!-- 필요한 경우 더 많은 세부 정보 추가 -->
        `;
    modal.style.display = "block";

    // 모달 외부를 클릭할 때 모달 닫기
    document.addEventListener("click", outsideModalClick);
  }

  // 모달 외부 클릭 시 모달 닫기
  function outsideModalClick(event) {
    if (event.target === modal) {
      closeModal();
      document.removeEventListener("click", outsideModalClick);
    }
  }

  // 모달을 닫는 함수
  function closeModal() {
    modal.style.display = "none";
  }

  // 닫기 버튼을 클릭하면 모달 닫기
  closeBtn.addEventListener("click", closeModal);

  // 제품 카드를 생성하고 그리드 컨테이너에 추가
  products.forEach((product) => {
    const card = createProductCard(product);
    gridContainer.appendChild(card);
  });
});
