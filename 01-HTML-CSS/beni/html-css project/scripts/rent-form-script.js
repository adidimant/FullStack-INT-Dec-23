const rollsRoyceModels = ["Phantom", "Ghost", "Cullinan"];
const alfaRomeoModels = ["Stelvio", "Giulia", "4C"];
const astonMartinModels = ["Valhalla", "Valour", "Vanquish S"];
const mercedesModels = ["Maybach", "C-Class", "G-Class"];
const ferrariModels = ["LaFerrari", "SF90", "812"];
const bmwModels = ["i8", "X6", "M8"];
const bicycle = ["Pink"];

const modelPrices = {
  Phantom: "2,500$",
  Ghost: "2,000$",
  Cullinan: "2,200$",
  Stelvio: "250$",
  Giulia: "300$",
  "4C": "400$",
  Valhalla: "2,700$",
  Valour: "2,400$",
  "Vanquish S": "2500$",
  Maybach: "1,900$",
  "C-Class": "180$",
  "G-Class": "320$",
  LaFerrari: "8,000$",
  SF90: "5,550$",
  812: "4,500$",
  i8: "500$",
  X6: "230$",
  M8: "700$",
  Pink: "9,999,999$",
};

const brandSelectInput = document.getElementById("brand");
const modelSelectInput = document.getElementById("model");
const pickupInput = document.getElementById("pickup-date");
const dropoffInput = document.getElementById("dropoff-date");
const insuranceInput = document.getElementById("insurance");

function showBrandModels() {
  value = brandSelectInput.value;
  if (value !== "") {
    modelSelectInput.classList.add("active");
    modelSelectInput.disabled = false;
    document.querySelector(".model.input-container").classList.add("active");
    if (value == "Rolls Royce") {
      addToSelect(rollsRoyceModels);
    } else if (value == "Alfa Romeo") {
      addToSelect(alfaRomeoModels);
    } else if (value == "Aston Martin") {
      addToSelect(astonMartinModels);
    } else if (value == "Mercedes-Benz") {
      addToSelect(mercedesModels);
    } else if (value == "Ferrari") {
      addToSelect(ferrariModels);
    } else if (value == "BMW") {
      addToSelect(bmwModels);
    } else if (value == "Bicycle") {
      addToSelect(bicycle);
    }
  }
}

function createOptions(model) {
  let option = document.createElement("option");
  option.value = model;
  option.textContent = model;
  modelSelectInput.appendChild(option);
}

function addToSelect(arr) {
  modelSelectInput.innerHTML = `<option value="" hidden="" disabled="" selected="">Choose car model</option>`;
  updatePrice();
  arr.forEach((model) => {
    createOptions(model);
  });
}

function updatePrice() {
  const selectedModel = modelSelectInput.value;
  if (selectedModel !== "") {
    document.querySelector(".price-text").textContent = "Day / ";
    document.querySelector(".price-num").textContent =
      modelPrices[selectedModel];
  } else {
    document.querySelector(".price-text").textContent = "";
    document.querySelector(".price-num").textContent = "";
  }
}

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function limitDropoffDate() {
  dropoffInput.value = pickupInput.value;
  dropoffInput.min = pickupInput.value;
}

pickupInput.min = getCurrentDate();
dropoffInput.min = getCurrentDate();

function submitForm(e) {
  e.preventDefault();
  showCarDetails();
}

function showCarDetails() {
  document.querySelector(".title").style.display = "none";
  document.querySelector(".rent-form").style.display = "none";
  document.querySelector(".loading-bar").style.display = "block";
  document.querySelector(".loading-index").style.animation =
    "loading 3s forwards";
  document.querySelector(".loading-index").style.webkitAnimation =
    "loading 3s forwards";
  setTimeout(function () {
    document.querySelector(".loading-bar").style.display = "none";
    document.querySelector(".msg-title").style.display = "block";
    document.querySelector(".msg-content").style.display = "block";
    document.querySelector(".car-details-container").style.display = "flex";
  }, 3000);
  document.querySelector(
    ".name-details"
  ).textContent = `${brandSelectInput.value} ${modelSelectInput.value}`;
  document.querySelector(
    ".date-details"
  ).textContent = `${pickupInput.value} to ${dropoffInput.value}`;
  document.querySelector(".price-details").textContent = `${
    modelPrices[modelSelectInput.value]
  } / day`;
  if (insuranceInput.checked) {
    document.querySelector(".insurance-detail").textContent = "With insurance.";
  } else {
    document.querySelector(".insurance-detail").textContent =
      "With no insurance.";
  }
}

setTimeout(showBrandModels, 100);
setTimeout(updatePrice, 300);
