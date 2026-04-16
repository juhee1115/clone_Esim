window.addEventListener("load", () => {
  const header = document.querySelector(".header");
  const mbt = document.querySelector(".mbt");
  const navmb = document.querySelector(".nav-mb");
  window.addEventListener("scroll", () => {
    let scy = document.documentElement.scrollTop;

    if (scy > 0) {
      header.classList.add("active");
      mbt.classList.add("active");
    } else {
      header.classList.remove("active");
      mbt.classList.remove("active");
    }
  });
  //모바일 메뉴 클릭시
  mbt.addEventListener("click", () => {
    navmb.classList.add("active");
  });
  const htmlRoot = document.querySelector("html");
  mbt.addEventListener("click", () => {
    const state = mbt.classList.contains("ani");
    if (state) {
      navmb.classList.remove("active");
      mbt.classList.remove("ani");
      htmlRoot.classList.remove("active");
      header.classList.remove("active");
      mbt.classList.remove("active");
    } else {
      navmb.classList.add("active");
      mbt.classList.add("ani");
      htmlRoot.classList.add("active");
      header.classList.add("active");
    }
  });

  // 반응형 처리
  // 모바일 메뉴 초기화
  // let winW = window.innerWidth;
  // console.log(winW);
  window.addEventListener("resize", () => {
    let winW = window.innerWidth;
    // mobile ===> pc전환
    if (winW > 1024) {
      mbt.classList.remove("ani");
      navMb.classList.remove("active");
      htmlRoot.classList.remove("active");
      if (scy > 0) {
        // 스크롤이 된 상태에서 화면 리사이징...
        header.classList.add("active");
        mbt.classList.add("active");
      } else {
        header.classList.remove("active");
        mbt.classList.remove("active");
      }
    }
  });
});
