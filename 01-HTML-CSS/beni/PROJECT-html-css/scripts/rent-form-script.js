const rollsRoyceModels = ["Phantom", "Ghost", "Cullinan"];
const alfaRomeoModels = ["Stelvio", "Giulia", "4C"];
const astonMartinModels = ["Valhalla", "Valour", "Vanquish S"];
const mercedesModels = ["Maybach", "C-Class", "G-Class"];
const ferrariModels = ["LaFerrari", "SF90", "812"];
const bmwModels = ["i8", "X6", "M8"];
const bicycle = ["Pink"];
const title = document.querySelector(".title");
const form = document.querySelector(".rent-form");
const brandSelectInput = document.getElementById("brand");
const modelSelectInput = document.getElementById("model");
const pickupInput = document.getElementById("pickup-date");
const dropoffInput = document.getElementById("dropoff-date");
const insuranceInput = document.getElementById("insurance");
const price = document.querySelector(".price");
const priceText = document.querySelector(".price-text");
const priceNum = document.querySelector(".price-num");
const loadBar = document.querySelector(".loading-bar");
const loadIndex = document.querySelector(".loading-index");
const msgTitle = document.querySelector(".msg-title");
const msgContent = document.querySelector(".msg-content");
const carDetailsContainer = document.querySelector(".car-details-container");
const nameDetails = document.querySelector(".name-details");
const dateDetails = document.querySelector(".date-details");
const priceDetails = document.querySelector(".price-details");
const insuranceDetails = document.querySelector(".insurance-detail");
const modelPrices = {
  Phantom: 2500,
  Ghost: 2000,
  Cullinan: 2200,
  Stelvio: 250,
  Giulia: 300,
  "4C": 400,
  Valhalla: 2700,
  Valour: 2400,
  "Vanquish S": 2500,
  Maybach: 1900,
  "C-Class": 180,
  "G-Class": 320,
  LaFerrari: 8000,
  SF90: 5550,
  812: 4500,
  i8: 500,
  X6: 230,
  M8: 700,
  Pink: 9999999,
};
let currPrice;

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
    price.style.display = "flex";
    priceText.textContent = "Day / ";
    if (insuranceInput.checked) {
      console.log("checked");
      priceNum.textContent =
        (
          modelPrices[selectedModel] +
          0.2 * modelPrices[selectedModel]
        ).toLocaleString() + "$";
    } else {
      priceNum.textContent = modelPrices[selectedModel].toLocaleString() + "$";
    }
  } else {
    price.style.display = "none";
    priceText.textContent = "";
    priceNum.textContent = "";
  }
  currPrice = priceNum.textContent;
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
  title.style.display = "none";
  form.style.display = "none";
  loadBar.style.display = "block";
  loadIndex.style.animation = "loading 3s forwards";
  loadIndex.style.webkitAnimation = "loading 3s forwards";
  setTimeout(function () {
    loadBar.style.display = "none";
    msgTitle.style.display = "block";
    msgContent.style.display = "block";
    carDetailsContainer.style.display = "flex";
  }, 3000);
  nameDetails.textContent = `${brandSelectInput.value} ${modelSelectInput.value}`;
  dateDetails.textContent = `${pickupInput.value} to ${dropoffInput.value}`;
  priceDetails.textContent = `${currPrice} / day`;
  if (insuranceInput.checked) {
    insuranceDetails.textContent = "With insurance.";
  } else {
    insuranceDetails.textContent = "With no insurance.";
  }
}

setTimeout(showBrandModels, 100);
setTimeout(updatePrice, 300);
