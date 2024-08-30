// 햄버거 메뉴 토글 기능
document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".mobile-overlay").classList.add("active");
  });

document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".mobile-overlay").classList.remove("active");
});
