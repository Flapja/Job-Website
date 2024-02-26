const title = document.querySelector("#title");
let sections = document.querySelectorAll("section");

window.addEventListener("load", () => {
  title.classList.remove("last");
  title.classList.add("top");
});

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 610;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.remove("card");
      sec.classList.add("change");
    }
  });
};
