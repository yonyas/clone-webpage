const moreBtn = document.querySelector(".fa-sort-up");
const title = document.querySelector(".info .metadata .title");

moreBtn.addEventListener("click", function () {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
  console.log("hi");
});
