const rollsRoyceModels = ["Phantom", "Ghost", "Cullinan"];
const alfaRomeoModels = ["Stelvio", "Giulia", "Tonale"];
const astonMartinModels = ["Valhalla", "Valour", "Vanquish S"];
const mercedesModels = ["Maybach", "C-Class", "G-Class"];
const ferrariModels = ["LaFerrari", "SF90 Spider", "812 GTS"];
const porscheModels = ["911 Carrera", "911 Turbo S", "718 Spyder RS"];
const bmwModels = ["i8", "X6 M Coupe", "M8 Competition"];

const brandSelectInput = document.getElementById("brand");
const modelSelectInput = document.getElementById("model");

function showBrandModels() {
  value = brandSelectInput.value;
  if (value == "rolls-royce") {
    modelSelectInput.innerHTML = `<option value="" hidden="" disabled="" selected="">Choose car model</option>`;
    rollsRoyceModels.forEach((model) => {
      createOptions(model);
    });
  } else if (value == "alfa-romeo") {
    modelSelectInput.innerHTML = `<option value="" hidden="" disabled="" selected="">Choose car model</option>`;
    alfaRomeoModels.forEach((model) => {
      createOptions(model);
    });
  } else if (value == "aston-martin") {
    modelSelectInput.innerHTML = `<option value="" hidden="" disabled="" selected="">Choose car model</option>`;
    astonMartinModels.forEach((model) => {
      createOptions(model);
    });
  } else if (value == "mercedes-benz") {
    modelSelectInput.innerHTML = `<option value="" hidden="" disabled="" selected="">Choose car model</option>`;
    mercedesModels.forEach((model) => {
      createOptions(model);
    });
  } else if (value == "ferrari") {
    modelSelectInput.innerHTML = `<option value="" hidden="" disabled="" selected="">Choose car model</option>`;
    ferrariModels.forEach((model) => {
      createOptions(model);
    });
  } else if (value == "porsche") {
    modelSelectInput.innerHTML = `<option value="" hidden="" disabled="" selected="">Choose car model</option>`;
    porscheModels.forEach((model) => {
      createOptions(model);
    });
  } else if (value == "bmw") {
    modelSelectInput.innerHTML = `<option value="" hidden="" disabled="" selected="">Choose car model</option>`;
    bmwModels.forEach((model) => {
      createOptions(model);
    });
  }
}

function createOptions(model) {
  let option = document.createElement("option");
  option.value = model;
  option.textContent = model;
  modelSelectInput.appendChild(option);
}
