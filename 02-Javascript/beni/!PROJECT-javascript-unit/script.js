// variables
const usernameFormInput = document.getElementById("username");
const fnameFormInput = document.getElementById("fname");
const emailFormInput = document.getElementById("email");
const phoneFormInput = document.getElementById("phone");
const countryFormInput = document.getElementById("country");
const cityFormInput = document.getElementById("city");
const submitBtn = document.querySelector(".submit-form-btn");
const allFormInputs = [usernameFormInput, fnameFormInput, emailFormInput, phoneFormInput, countryFormInput, cityFormInput];
const regDateFilterInput = document.getElementById("registered-filter");
const lastUpdatedFilterInput = document.getElementById("last-update-filter");
const tableSection = document.getElementById("table-section");
const formSection = document.getElementById("form-section");
const formTabBtn = document.querySelector(".form-tab-btn");
const tableTabBtn = document.querySelector(".table-tab-btn");
const deletingUserText = document.querySelector(".deleting-user-text");
const usersTable = document.getElementById("users-table");
const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const popup = document.querySelector(".popup-container");
let debounceTimer;
let rowHTML;
let selectedRow;
let updateTableInterval = setInterval(updateTable, 30000);

// events
formTabBtn.onclick = changeTab;
tableTabBtn.onclick = changeTab;
usernameFormInput.addEventListener("input", () => {
  checkEmptyFormValues();
  const value = usernameFormInput.value;
  const allUsers = Object.keys(JSON.parse(localStorage.getItem("allUsers")));
  const exists = allUsers.some((user) => {
    return user == value;
  });
  if (exists) {
    allFormInputs.forEach((input) => {
      if (input != usernameFormInput) {
        input.disabled = true;
      }
    });
    usernameFormInput.style.color = "#e10000";
    submitBtn.disabled = true;
    submitBtn.classList.add("inactive");
    document.querySelector(".user-form-error").style.visibility = "visible";
    document.querySelector(".user-form-error").textContent = "Username already exists!";
  } else {
    allFormInputs.forEach((input) => {
      if (input != usernameFormInput) {
        input.disabled = false;
      }
    });
    usernameFormInput.style.color = "#000";
    document.querySelector(".user-form-error").style.visibility = "hidden";
  }
});
emailFormInput.addEventListener("input", () => {
  checkEmptyFormValues();
  const value = emailFormInput.value;
  const allEmails = Object.entries(JSON.parse(localStorage.getItem("allUsers"))).map((user) => {
    return user[1].email;
  });
  const exists = allEmails.some((email) => {
    return email == value;
  });
  if ((emailRegEx.test(emailFormInput.value) || emailFormInput.value == "") && !exists) {
    document.querySelector(".user-form-error").style.visibility = "hidden";
    allFormInputs.forEach((input) => {
      if (input != emailFormInput) {
        input.disabled = false;
      }
    });
    emailFormInput.style.color = "#000";
  } else {
    if (exists) {
      document.querySelector(".user-form-error").style.visibility = "visible";
      document.querySelector(".user-form-error").textContent = "Email already exists!";
    }
    if (!exists) {
      document.querySelector(".user-form-error").style.visibility = "hidden";
    }
    allFormInputs.forEach((input) => {
      if (input != emailFormInput) {
        input.disabled = true;
      }
    });
    emailFormInput.style.color = "#e10000";
    submitBtn.disabled = true;
    submitBtn.classList.add("inactive");
  }
});
fnameFormInput.addEventListener("input", () => {
  checkEmptyFormValues();
});
phoneFormInput.addEventListener("input", () => {
  checkEmptyFormValues();
  if (phoneFormInput.value.length == 0 || phoneFormInput.value.length >= 10) {
    allFormInputs.forEach((input) => {
      if (input != phoneFormInput) {
        input.disabled = false;
      }
    });
    phoneFormInput.style.color = "#000";
  } else {
    allFormInputs.forEach((input) => {
      if (input != phoneFormInput) {
        input.disabled = true;
      }
    });
    phoneFormInput.style.color = "#e10000";
    submitBtn.disabled = true;
    submitBtn.classList.add("inactive");
  }
});
countryFormInput.addEventListener("input", () => {
  checkEmptyFormValues();
});
cityFormInput.addEventListener("input", () => {
  checkEmptyFormValues();
});

// functions
function User(fname, username, email, phone, country, city, registered, lastUpdate) {
  this.fname = caseCorrection(fname);
  this.username = username;
  this.email = email;
  this.phone = phone;
  this.country = caseCorrection(country);
  this.city = caseCorrection(city);
  this.registered = `${String(registered.getDate()).padStart(2, "0")}-${String(registered.getMonth() + 1).padStart(2, "0")}-${registered.getFullYear()}`;
  this.lastUpdate = `${String(lastUpdate.getDate()).padStart(2, "0")}-${String(lastUpdate.getMonth() + 1).padStart(2, "0")}-${lastUpdate.getFullYear()}`;
}

function caseCorrection(word) {
  let newArr = [];
  word.split(" ").forEach((word) => {
    let firstChar = word.charAt(0).toUpperCase();
    let lowerCased = word.toLowerCase().substring(1);
    let newWord = firstChar + lowerCased;
    newArr.push(newWord);
  });
  return newArr.join(" ");
}

function checkEmptyFormValues() {
  let count = 0;
  allFormInputs.forEach((input) => {
    if (input.value.length == 0) {
      count++;
    }
  });
  if (count > 0) {
    submitBtn.disabled = true;
    submitBtn.classList.add("inactive");
  } else if (count == 0) {
    submitBtn.disabled = false;
    submitBtn.classList.remove("inactive");
  }
}

function changeTab(e) {
  if (e == "formSubmitted") {
    formTabBtn.classList.remove("active");
    formSection.classList.remove("active");
    tableTabBtn.classList.add("active");
    tableSection.classList.add("active");
    return;
  }
  formTabBtn.classList.remove("active");
  tableTabBtn.classList.remove("active");
  e.target.classList.add("active");
  if (e.target.textContent == "Show Users") {
    formSection.classList.remove("active");
    tableSection.classList.add("active");
  } else {
    tableSection.classList.remove("active");
    formSection.classList.add("active");
  }
}

function activateEditBtns() {
  const delBtns = document.querySelectorAll(".del-row-btn");
  const editBtns = document.querySelectorAll(".edit-row-btn");
  delBtns.forEach((btn) => {
    btn.disabled = false;
  });
  editBtns.forEach((btn) => {
    btn.disabled = false;
  });
}

function disableEditBtns() {
  const delBtns = document.querySelectorAll(".del-row-btn");
  const editBtns = document.querySelectorAll(".edit-row-btn");
  delBtns.forEach((btn) => {
    btn.disabled = true;
  });
  editBtns.forEach((btn) => {
    btn.disabled = true;
  });
}

function checkLocalStorageUsers() {
  if (!localStorage.getItem("allUsers")) {
    const arr = {};
    localStorage.setItem("allUsers", JSON.stringify(arr));
  }
}

function addUser(user) {
  checkLocalStorageUsers();
  const allUsers = JSON.parse(localStorage.getItem("allUsers"));
  allUsers[user.username] = user;
  localStorage.setItem("allUsers", JSON.stringify(allUsers));
}

function submitForm(e) {
  e.preventDefault();
  const username = usernameFormInput.value;
  const fname = fnameFormInput.value;
  const email = emailFormInput.value;
  const phone = phoneFormInput.value;
  const country = countryFormInput.value;
  const city = cityFormInput.value;
  const newUser = new User(fname, username, email, phone, country, city, new Date(), new Date());
  addUser(newUser);
  changeTab("formSubmitted");
  updateTable();
  fnameFormInput.value = "";
  usernameFormInput.value = "";
  emailFormInput.value = "";
  phoneFormInput.value = "";
  countryFormInput.value = "";
  cityFormInput.value = "";
  checkEmptyFormValues();
}

function updateTable(users = null) {
  const tbody = usersTable.querySelector("tbody");
  let allUsers;
  if (users == null) {
    allUsers = JSON.parse(localStorage.getItem("allUsers"));
  } else {
    allUsers = users;
  }
  const reverseArr = Object.keys(allUsers).reverse();
  const reverseObj = {};
  reverseArr.forEach((key) => {
    reverseObj[key] = allUsers[key];
  });
  tbody.innerHTML = "";
  for (let user in reverseObj) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>
      <button class="del-row-btn" onclick="showDeletePopup(event)">Delete</button>
      <button class="edit-row-btn" onclick="editTableRow(event)">Edit</button>
    </td>
    <td>${reverseObj[user].fname}</td>
    <td>${reverseObj[user].username}</td>
    <td>${reverseObj[user].email}</td>
    <td>${reverseObj[user].phone}</td>
    <td>${reverseObj[user].country}</td>
    <td>${reverseObj[user].city}</td>
    <td>${reverseObj[user].registered}</td>
    <td>${reverseObj[user].lastUpdate}</td>
    `;
    tbody.appendChild(tr);
  }
}

function editTableRow(e) {
  setTableInterval("disable");
  disableEditBtns();
  const row = e.target.parentElement.parentElement;
  rowHTML = row.innerHTML;
  const fnameValue = row.querySelector("td:nth-child(2)").textContent;
  const usernameValue = row.querySelector("td:nth-child(3)").textContent;
  const emailValue = row.querySelector("td:nth-child(4)").textContent;
  const phoneValue = row.querySelector("td:nth-child(5)").textContent;
  const countryValue = row.querySelector("td:nth-child(6)").textContent;
  const cityValue = row.querySelector("td:nth-child(7)").textContent;
  const regValue = row.querySelector("td:nth-child(8)").textContent;
  const updatedValue = row.querySelector("td:nth-child(9)").textContent;
  row.innerHTML = `
  <tr>
    <td>
      <button class="del-row-btn" onclick="showDeletePopup(event)" disabled>Delete</button>
      <button class="edit-row-btn" onclick="confirmEdit(event, '${fnameValue}', '${usernameValue}', '${emailValue}', '${phoneValue}', '${countryValue}', '${cityValue}')">Save</button>
    </td>
    <td style="padding: 0;"><input type="text" class="edit-input" value="${fnameValue}"></td>
    <td style="padding: 0;"><input type="text" class="edit-input username-edit-input" value="${usernameValue}"></td>
    <td style="padding: 0;"><input type="email" class="edit-input email-edit-input" value="${emailValue}"></td>
    <td style="padding: 0;"><input type="number" class="edit-input phone-edit-input" value="${phoneValue}"></td>
    <td style="padding: 0;"><input type="text" class="edit-input" value="${countryValue}"></td>
    <td style="padding: 0;"><input type="text" class="edit-input" value="${cityValue}"></td>
    <td>${regValue}</td>
    <td>${updatedValue}</td>
    </tr>
    `;
  const usernameEditInput = document.querySelector(".username-edit-input");
  const emailEditInput = document.querySelector(".email-edit-input");
  const phoneEditInput = document.querySelector(".phone-edit-input");
  const saveBtn = row.querySelector(".edit-row-btn");
  const allUsers = Object.keys(JSON.parse(localStorage.getItem("allUsers")));
  const filteredUsers = allUsers.filter((user) => {
    return user !== usernameValue;
  });
  usernameEditInput.addEventListener("input", () => {
    const value = usernameEditInput.value;
    const exists = filteredUsers.some((user) => {
      return user == value;
    });
    if (exists || usernameEditInput.value.length == 0) {
      saveBtn.disabled = true;
      usernameEditInput.style.color = "#e10000";
    } else {
      saveBtn.disabled = false;
      usernameEditInput.style.color = "#000";
    }
  });

  emailEditInput.addEventListener("input", () => {
    const value = emailEditInput.value;
    const allEmails = Object.entries(JSON.parse(localStorage.getItem("allUsers"))).map((user) => {
      return user[1].email;
    });
    const filteredEmails = allEmails.filter((email) => {
      return email !== emailValue;
    });
    const exists = filteredEmails.some((email) => {
      return email == value;
    });
    if (!emailRegEx.test(emailEditInput.value) || exists || emailEditInput.value.length == 0) {
      saveBtn.disabled = true;
      emailEditInput.style.color = "#e10000";
    } else {
      saveBtn.disabled = false;
      emailEditInput.style.color = "#000";
    }
  });

  phoneEditInput.addEventListener("input", () => {
    if (phoneEditInput.value.length < 10) {
      saveBtn.disabled = true;
      phoneEditInput.style.color = "#e10000";
    } else {
      saveBtn.disabled = false;
      phoneEditInput.style.color = "#000";
    }
  });
}

function confirmEdit(e, fname, username, email, phone, country, city) {
  const row = e.target.parentElement.parentElement;
  const allUsers = JSON.parse(localStorage.getItem("allUsers"));
  const user = allUsers[username];
  const fnameValue = row.querySelector("td:nth-child(2) input").value;
  const usernameValue = row.querySelector("td:nth-child(3) input").value;
  const emailValue = row.querySelector("td:nth-child(4) input").value;
  const phoneValue = row.querySelector("td:nth-child(5) input").value;
  const countryValue = row.querySelector("td:nth-child(6) input").value;
  const cityValue = row.querySelector("td:nth-child(7) input").value;

  if (fnameValue == fname && usernameValue == username && emailValue == email && phoneValue == phone && countryValue == country && cityValue == city) {
    row.innerHTML = rowHTML;
    activateEditBtns();
    setTableInterval("enable");
    return;
  }
  user.fname = caseCorrection(fnameValue);
  user.username = usernameValue;
  user.email = emailValue;
  user.phone = phoneValue;
  user.country = caseCorrection(countryValue);
  user.city = caseCorrection(cityValue);
  user.lastUpdate = `${String(new Date().getDate()).padStart(2, "0")}-${String(new Date().getMonth() + 1).padStart(2, "0")}-${new Date().getFullYear()}`;
  delete allUsers[username];
  allUsers[user.username] = user;
  localStorage.setItem("allUsers", JSON.stringify(allUsers));
  updateTable();
  activateEditBtns();
  setTableInterval("enable");
}

function toggleFilterInputs(status) {
  const allFilterInputs = document.querySelectorAll(".filter-input");
  if (status == "enable") {
    allFilterInputs.forEach((input) => {
      input.disabled = false;
    });
  } else if (status == "disable") {
    allFilterInputs.forEach((input) => {
      input.disabled = true;
    });
  }
}

function setTableInterval(status) {
  if (status == "enable") {
    updateTableInterval = setInterval(updateTable, 30000);
  } else if (status == "disable") {
    clearInterval(updateTableInterval);
  }
}

function showDeletePopup(e) {
  setTableInterval("disable");
  toggleFilterInputs("disable");
  disableEditBtns();
  toggleTabBtns("disable");
  popup.style.display = "flex";
  selectedRow = e.target.parentElement.parentElement;
}

function confirmPopup() {
  setTableInterval("enable");
  popup.style.display = "none";
  deleteTableRow(selectedRow);
  selectedRow = null;
}

function cancelPopup() {
  setTableInterval("enable");
  toggleFilterInputs("enable");
  toggleTabBtns("enable");
  activateEditBtns();
  popup.style.display = "none";
  selectedRow = null;
}

function toggleTabBtns(status) {
  if (status == "disable") {
    formTabBtn.disabled = true;
    formTabBtn.style.filter = "brightness(0.5)";
    tableTabBtn.disabled = true;
    tableTabBtn.style.filter = "brightness(0.5)";
  } else if (status == "enable") {
    formTabBtn.disabled = false;
    formTabBtn.style.filter = "brightness(1)";
    tableTabBtn.disabled = false;
    tableTabBtn.style.filter = "brightness(1)";
  }
}

function deleteTableRow(row) {
  setTableInterval("disable");
  disableEditBtns();
  toggleTabBtns("disable");
  deletingUserText.style.display = "block";
  const allUsers = JSON.parse(localStorage.getItem("allUsers"));
  const user = row.querySelector(":nth-child(3)").textContent;
  let count = 6;
  const undoContainer = document.querySelector(".undo-btn-container");
  const undoCounterBars = document.querySelectorAll(".undo-counter-bar");
  undoContainer.style.visibility = "visible";
  const undoBtn = document.querySelector(".undo-btn");
  const interval = setInterval(() => {
    count--;
    if (count !== 0) {
      undoCounterBars[count].style.backgroundColor = "transparent";
    }
  }, 1000);
  const timeout = setTimeout(() => {
    setTableInterval("enable");
    toggleTabBtns("enable");
    deletingUserText.style.display = "none";
    undoContainer.style.visibility = "hidden";
    undoCounterBars.forEach((bar) => {
      bar.style.backgroundColor = "#1740c7";
    });
    toggleFilterInputs("enable");
    activateEditBtns();
    clearInterval(interval);
    delete allUsers[user];
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    updateTable();
  }, 6000);
  undoBtn.onclick = () => {
    undoDel(undoContainer, undoCounterBars, interval, timeout, allUsers);
  };
  const table = usersTable.querySelector("tbody");
  table.removeChild(row);
}

function undoDel(container, bars, interval, timeout, allUsers) {
  setTableInterval("enable");
  toggleFilterInputs("enable");
  toggleTabBtns("enable");
  deletingUserText.style.display = "none";
  container.style.visibility = "hidden";
  bars.forEach((bar) => {
    bar.style.backgroundColor = "#1740c7";
  });
  clearInterval(interval);
  clearTimeout(timeout);
  localStorage.setItem("allUsers", JSON.stringify(allUsers));
  updateTable();
}

function filterInputs() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const usernameFilter = document.getElementById("username-filter").value.toLowerCase();
    const emailFilter = document.getElementById("email-filter").value.toLowerCase();
    const phoneFilter = document.getElementById("phone-filter").value.toLowerCase();
    const fnameFilter = document.getElementById("fname-filter").value.toLowerCase();
    const countryFilter = document.getElementById("country-filter").value.toLowerCase();
    const cityFilter = document.getElementById("city-filter").value.toLowerCase();
    const regFilter = document.getElementById("registered-filter").value;
    const regYear = regFilter.substring(0, 4);
    const regMonth = regFilter.substring(5, 7);
    const regDay = regFilter.substring(8);
    const regDateFilter = `${regDay}-${regMonth}-${regYear}`;
    const updatedFilter = document.getElementById("last-update-filter").value;
    const updatedYear = updatedFilter.substring(0, 4);
    const updatedMonth = updatedFilter.substring(5, 7);
    const updatedDay = updatedFilter.substring(8);
    const updatedDateFilter = `${updatedDay}-${updatedMonth}-${updatedYear}`;
    const allUsers = JSON.parse(localStorage.getItem("allUsers"));
    const filteredUsers = Object.values(allUsers)
      .filter((user) => {
        return (
          user.username.toLowerCase().startsWith(usernameFilter) &&
          user.username.toLowerCase().includes(usernameFilter) &&
          user.email.toLowerCase().startsWith(emailFilter) &&
          user.email.toLowerCase().includes(emailFilter) &&
          user.phone.toLowerCase().startsWith(phoneFilter) &&
          user.phone.toLowerCase().includes(phoneFilter) &&
          user.fname.toLowerCase().startsWith(fnameFilter) &&
          user.fname.toLowerCase().includes(fnameFilter) &&
          user.country.toLowerCase().startsWith(countryFilter) &&
          user.country.toLowerCase().includes(countryFilter) &&
          user.city.toLowerCase().startsWith(cityFilter) &&
          user.city.toLowerCase().includes(cityFilter) &&
          (regDateFilter == "--" || user.registered == regDateFilter) &&
          (updatedDateFilter == "--" || user.lastUpdate == updatedDateFilter)
        );
      })
      .reverse();
    updateTable(filteredUsers);
  }, 250);
}

updateTable();
