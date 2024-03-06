const iframe = document.querySelector("iframe");
const rent = document.querySelector('a[href="./pages/rent-form.html"]');

function toggleNavItem(item) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  if (item.textContent == "ARISTEIA") {
    document
      .querySelector('nav a[href="./pages/home.html"]')
      .classList.add("active");
  }
  item.classList.add("active");
  if (item.textContent == "Rent") {
    iframe.onload = function () {
      const brandOptions =
        iframe.contentDocument.querySelectorAll("#brand option");
      brandOptions[0].selected = "selected";
    };
  } else {
    iframe.onload = "";
  }
  if (item.textContent == "Catalog") {
    iframe.onload = function () {
      const cars = iframe.contentDocument.querySelectorAll(".car-container");
      cars.forEach((car) => {
        car.onclick = function () {
          const brandName = this.querySelector(".brand-name").textContent;
          const modelName = this.querySelector(".model-name").textContent;
          toggleNavItem(rent);
          iframe.src = "./pages/rent-form.html";
          iframe.onload = function () {
            const brandInput = iframe.contentDocument.getElementById("brand");
            const modelInput = iframe.contentDocument.getElementById("model");
            brandInput.value = brandName;
            setTimeout(function () {
              modelInput.value = modelName;
            }, 200);
          };
        };
      });
    };
  } else {
    iframe.onload = "";
  }
}
