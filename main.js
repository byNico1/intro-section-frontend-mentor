const menuIcon = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-menu");
const sidebar = document.querySelector(".sidebar");
const arrowDropdown = document.querySelector(".arrow-dropdown");
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");
const arrowDropdownCompany = document.querySelector(".arrow-dropdown-company");
const arrowDownCompany = document.querySelector(".arrow-down-company");
const arrowUpCompany = document.querySelector(".arrow-up-company");
const companyList = document.querySelector(".company-list");
const featList = document.querySelector(".feat-list");

menuIcon.onclick = function () {
  sidebar.classList.toggle("show");
};

closeMenu.onclick = function () {
  sidebar.classList.toggle("show");
};

arrowDropdown.onclick = function () {
  arrowDown.classList.toggle("hidden");
  arrowUp.classList.toggle("hidden");
  featList.classList.toggle("hidden");
};

arrowDropdownCompany.onclick = function () {
  arrowDownCompany.classList.toggle("hidden");
  arrowUpCompany.classList.toggle("hidden");
  companyList.classList.toggle("hidden");
};
