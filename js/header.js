window.addEventListener("load", () => {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    let scy = document.documentElement.scrollTop;

    if (scy > 0) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
});