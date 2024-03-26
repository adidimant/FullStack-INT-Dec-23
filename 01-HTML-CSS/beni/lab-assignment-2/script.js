let art = ["בדים", "כדים וקערות", "חפצי נוי", "פוסטרים"];
let bicycle = ["אביזרים", "הרים זנב קשיח", "הרים שיכוך מלא"];

let category = document.getElementById("category");
let subCategory = document.getElementById("sub-category");
let subCatLable = document.querySelector('label[for="sub-category"]');
let subCatWrapper = document.querySelector(
  'label[for="sub-category"] + .select-wrapper'
);

let nameCounter = document.querySelector(".name-counter");
let clearButton = document.querySelector(".clear");

function addToSub(arr) {
  subCategory.innerHTML = `<option value="" disabled selected hidden>בחירת תת קטגוריה</option>`;
  arr.forEach((item) => {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    subCategory.appendChild(option);
  });
}

category.onchange = function () {
  subCategory.style.cursor = "pointer";
  subCategory.disabled = false;
  subCatLable.style.color = "#333";
  subCatWrapper.classList.remove("disabled");
  if (this.value == "אומנות") {
    addToSub(art);
  }
  if (this.value == "אופניים") {
    addToSub(bicycle);
  }
};

function nameCharCount(input) {
  if (input.value.length !== 0) {
    clearButton.classList.add("active");
  } else {
    clearButton.classList.remove("active");
  }

  nameCounter.textContent = `${input.value.length}/30`;
}

function clearInput(btn) {
  btn.previousElementSibling.value = "";
  nameCounter.textContent = `0/30`;
}
