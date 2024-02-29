const rollsRoyceModels = ["Phantom", "Ghost", "Cullinan"];
const alfaRomeoModels = ["Stelvio", "Giulia", "4C Spider"];
const astonMartinModels = ["Valhalla", "Valour", "Vanquish S"];
const mercedesModels = ["Maybach", "C-Class", "G-Class"];
const ferrariModels = ["LaFerrari", "SF90 Spider", "812 GTS"];
const porscheModels = ["365 C Coupe", "911 Turbo S", "718 Spyder RS"];
const bmwModels = ["i8", "X6 M Coupe", "M8 Competition"];

const brandSelectInput = document.getElementById("brand");
const modelSelectInput = document.getElementById("model");

const pickupInput = document.getElementById("pickup-date");
const dropoffInput = document.getElementById("dropoff-date");

function showBrandModels() {
  modelSelectInput.classList.add("active");
  modelSelectInput.disabled = false;
  document.querySelector(".model.input-container").classList.add("active");
  value = brandSelectInput.value;
  if (value == "rolls-royce") {
    addToSelect(rollsRoyceModels);
  } else if (value == "alfa-romeo") {
    addToSelect(alfaRomeoModels);
  } else if (value == "aston-martin") {
    addToSelect(astonMartinModels);
  } else if (value == "mercedes-benz") {
    addToSelect(mercedesModels);
  } else if (value == "ferrari") {
    addToSelect(ferrariModels);
  } else if (value == "porsche") {
    addToSelect(porscheModels);
  } else if (value == "bmw") {
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
  console.log("ok");
  dropoffInput.min = pickupInput.value;
}

pickupInput.min = getCurrentDate();
dropoffInput.min = getCurrentDate();
