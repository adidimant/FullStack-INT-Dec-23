function toggleNavItem(item) {
  console.log(item);
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  item.classList.add("active");
}
