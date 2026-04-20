window.addEventListener("load", () => {
  const swbusiness = new Swiper(".sw-business", {
    slidesPerView: 1,

    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      //1024px 이후
      1024: {
        slidesPerView: 3,
      },
    },
  });
  // business-modal
  const businessModal = document.querySelector(".business-modal");

  // 모달 보이게
  businessModal.style.display = "flex";

  // 클릭하면 닫기
  businessModal.addEventListener("click", () => {
    businessModal.style.display = "none";
  });
});
