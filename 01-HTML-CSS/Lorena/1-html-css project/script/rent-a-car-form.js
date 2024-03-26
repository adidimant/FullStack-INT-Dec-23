
const ToyotaModels = ["Yaris", "Land Cruiser Prado", "Kluger"];
const MgModels = ["HS", "5", "3"];
const mitsubishiModels = ["Mirage G4", "Outlander", "Outlander Sport"];
const nissanModels = ["Rogue", "ARIYA", "Kicks"];
const teslaModels = ["Model S", "Model 3", "Model y"];
const fordModels = ["Explorer", "Escape", "Fiesta ST"];
const audiModels = ["A1", "A2", "A3"];

const modelPrices = {
  Yaris: "500$",
  "LandCruiserPrado": "650$",
  Kluger: "750$",
  "HS": "250$",
  "5": "300$",
  "3": "400$",
  Rogue: "700$",
  "ARIYA": "400$",
  Kicks: "500$",
  "Model-S": "900$",
  "Model-3": "780$",
  "Model-Y": "920$",
  Explorer: "800$",
  Escape: "850$",
  "Fiesta-ST": "4,500$",
  "A1": "930$",
  "A2": "900$",
  "A3": "980$",
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
    if (value == "Toyota") {
      addToSelect(ToyotaModels);
    } else if (value == "MG") {
      addToSelect(MgModels);
    } else if (value == "Mitsubishi") {
      addToSelect(mitsubishiModels);
    } else if (value == "Nissan") {
        addToSelect(nissanModels);
    } else if (value == "Tesla") {
      addToSelect(teslaModels);
    } else if (value == "Ford") {
      addToSelect(fordModels);
    } else if (value == "Audi") {
      addToSelect(audiModels);
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
