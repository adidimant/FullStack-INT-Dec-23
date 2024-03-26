const bottom = document.getElementById("bottom-section");
function scrollToSection() {
  bottom.style.display = "flex";
  bottom.scrollIntoView({ behavior: "smooth" });
}
