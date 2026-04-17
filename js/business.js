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
});
