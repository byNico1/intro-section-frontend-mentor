// Desktop

const menus = document.querySelectorAll(".menu");
const arrowDownAll = document.querySelectorAll(".arrowdropdown");

const sidebar = document.querySelector(".sidebar");

const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");

const arrowDownCompany = document.querySelector(".arrow-down-company");
const arrowUpCompany = document.querySelector(".arrow-up-company");
const companyList = document.querySelector(".company-list");
const featList = document.querySelector(".feat-list");

function handleMenuClick(el) {
  el.classList.toggle("show");
}

function handleDropDownClick(el) {
  arrowDown.classList.toggle("hidden");
  arrowUp.classList.toggle("hidden");
  if (
    el.classList.contains("feat") &&
    companyList.classList.value !== "hidden"
  ) {
    companyList.classList.add("hidden");
    arrowDownCompany.classList.remove("hidden");
    arrowUpCompany.classList.add("hidden");
    featList.classList.toggle("hidden");
  } else {
    featList.classList.add("hidden");
    arrowDown.classList.remove("hidden");
    arrowUp.classList.add("hidden");
    arrowDownCompany.classList.toggle("hidden");
    arrowUpCompany.classList.toggle("hidden");
    companyList.classList.toggle("hidden");
  }
}

menus.forEach((el) =>
  el.addEventListener("click", () => handleMenuClick(sidebar))
);

arrowDownAll.forEach((el) =>
  el.addEventListener("click", () => handleDropDownClick(el))
);

// Mobile

const arrowDropdownSidebar = document.querySelectorAll(".arrow-dropdown-s");
const downUpFeat = document.querySelectorAll(".down-up-feat");
const downUpComp = document.querySelectorAll(".down-up-comp");
const featListSidebar = document.querySelector(".feat-list-sidebar");
const companyListSidebar = document.querySelector(".company-list-sidebar");

function handleArrows(arrowsFeat, arrowsComp, el) {
  if (el.classList.contains("feat")) {
    featListSidebar.classList.toggle("hidden");
    arrowsFeat.forEach((arrow) => arrow.classList.toggle("hidden"));
  } else {
    companyListSidebar.classList.toggle("hidden");
    arrowsComp.forEach((arrow) => arrow.classList.toggle("hidden"));
  }
}

arrowDropdownSidebar.forEach((el) =>
  el.addEventListener("click", () => handleArrows(downUpFeat, downUpComp, el))
);
