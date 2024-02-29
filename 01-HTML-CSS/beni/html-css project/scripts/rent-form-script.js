const rollsRoyceModels = ["Phantom", "Ghost", "Cullinan"];
const alfaRomeoModels = ["Stelvio", "Giulia", "4C"];
const astonMartinModels = ["Valhalla", "Valour", "Vanquish S"];
const mercedesModels = ["Maybach", "C-Class", "G-Class"];
const ferrariModels = ["LaFerrari", "SF90", "812"];
const porscheModels = ["356 C", "911", "718"];
const bmwModels = ["i8", "X6", "M8"];

const brandSelectInput = document.getElementById("brand");
const modelSelectInput = document.getElementById("model");
const pickupInput = document.getElementById("pickup-date");
const dropoffInput = document.getElementById("dropoff-date");
const insuranceInput = document.getElementById("insurance");

function showBrandModels() {
  modelSelectInput.classList.add("active");
  modelSelectInput.disabled = false;
  document.querySelector(".model.input-container").classList.add("active");
  value = brandSelectInput.value;
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
  } else if (value == "Porsche") {
    addToSelect(porscheModels);
  } else if (value == "Bmw") {
    addToSelect(bmwModels);
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
  arr.forEach((model) => {
    createOptions(model);
  });
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
