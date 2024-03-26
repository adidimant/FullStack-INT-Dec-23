console.log("hello world");
const links = document.querySelectorAll(".header-nav a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log(e.target);
    links.forEach((link) => {
      link.classList.remove("active-link");
    });
    e.target.classList.add("active-link");
  });
});
