const $ = document;
const search = $.querySelector(".search input");
const footer = $.querySelector("footer");
const bg = $.querySelector(".bg");
const signUp = $.querySelector("signup");
const buttonMore = $.querySelector(".more");
const buttonMoreContentP = $.querySelectorAll(".more-content button");
const buttonMoreContent = $.querySelector(".more-content");
search.addEventListener("click", function (event) {
  bg.style["display"] = "block";
  event.stopPropagation();
  buttonMore.style.transform = "rotate(0deg)";
});
$.addEventListener("click", function () {
  bg.style["display"] = "none";
  buttonMore.style.transform = "rotate(0deg)";
});
buttonMore.addEventListener("click", function (event) {
  if (buttonMore.style.transform == "rotate(180deg)") {
    buttonMore.style.transform = "rotate(0deg)";
    buttonMoreContentP.forEach((e) => (e.style.display = "none"));
    buttonMoreContent.style.height = "0";
  } else {
    buttonMore.style.transform = "rotate(180deg)";
    buttonMoreContent.style.height = "6em";
    setTimeout(function () {
      buttonMoreContentP.forEach((e) => (e.style.display = "block"));
    }, 1000);
  }
  event.stopPropagation();
});
