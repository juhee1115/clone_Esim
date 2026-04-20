window.addEventListener("load", () => {
  AOS.init();
  // gotop
  // gooter 상단 위치 픽셀값 파악
  // waypoin 라이브러리 : 스크롤 위치를 감지 해서 특정 시점에 이벤트 실행
  let footer = document.querySelector(".footer");
  let footerY = footer.offsetTop;
  console.log(footerY);
  let waypoin_footer = new wayPoint({
    element: document.querySelector(".footer"),
    handler: function (dirction) {
      // console.log(dirction);
      if (direction === "down") {
        gotop.classList.add("active");
      } else {
        gotop.classList.remove("active");
      }
    },
  });
  //   scroll 위치가 서비스 영역에 위치하면
  let waypoin_service = new wayPoint({
    element: document.querySelector(".service"),
    handlerj: function (dirction) {
      console.log(direction);
    },
    offset: "80%",
  });
});
