const iframe = document.querySelector("iframe");
const rent = document.querySelector('a[href="./rent-form.html"]');

function toggleNavItem(item) {
  console.log(item);
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  item.classList.add("active");
  if (item.textContent == "Home") {
    console.log("home");
  } else if (item.textContent == "Rent") {
    console.log("rent");
  } else if (item.textContent == "Catalog") {
    console.log("catalog");
    iframe.onload = function () {
      const cars = iframe.contentDocument.querySelectorAll(".car-container");
      cars.forEach((car) => {
        car.onclick = function () {
          console.log(this.querySelector(".brand-name").textContent);
          const brandName = this.querySelector(".brand-name").textContent;
          const modelName = this.querySelector(".model-name").textContent;
          console.log(modelName);
          toggleNavItem(rent);
          iframe.src = "./rent-form.html";
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
  } else if (item.textContent == "About Us") {
    console.log("aboutus");
  }
}
