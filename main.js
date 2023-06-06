const menuIcon = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-menu");
const sidebar = document.querySelector(".sidebar");
// Desktop
const arrowDropdown = document.querySelector(".arrow-dropdown");
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");
const arrowDropdownCompany = document.querySelector(".arrow-dropdown-company");
const arrowDownCompany = document.querySelector(".arrow-down-company");
const arrowUpCompany = document.querySelector(".arrow-up-company");
const companyList = document.querySelector(".company-list");
const featList = document.querySelector(".feat-list");

// Sidebar
const arrowDropdownSidebar = document.querySelector(".arrow-dropdown-sidebar");
const arrowDownSidebar = document.querySelector(".arrow-down-sidebar");
const arrowUpSidebar = document.querySelector(".arrow-up-sidebar");
const arrowDropdownCompanySidebar = document.querySelector(
  ".arrow-dropdown-company-sidebar"
);
const arrowDownCompanySidebar = document.querySelector(
  ".arrow-down-company-sidebar"
);
const arrowUpCompanySidebar = document.querySelector(
  ".arrow-up-company-sidebar"
);
const companyListSidebar = document.querySelector(".company-list-sidebar");
const featListSidebar = document.querySelector(".feat-list-sidebar");

menuIcon.onclick = function () {
  sidebar.classList.toggle("show");
};

closeMenu.onclick = function () {
  sidebar.classList.toggle("show");
};

arrowDropdown.onclick = function () {
  arrowDown.classList.toggle("hidden");
  arrowUp.classList.toggle("hidden");
  if (companyList.classList.value !== "hidden") {
    companyList.classList.add("hidden");
    arrowDownCompany.classList.remove("hidden");
    arrowUpCompany.classList.add("hidden");
  }
  featList.classList.toggle("hidden");
};

arrowDropdownCompany.onclick = function () {
  arrowDownCompany.classList.toggle("hidden");
  arrowUpCompany.classList.toggle("hidden");
  if (featList.classList.value !== "hidden") {
    featList.classList.add("hidden");
    arrowDown.classList.remove("hidden");
    arrowUp.classList.add("hidden");
  }
  companyList.classList.toggle("hidden");
};

// Mobile Sidebar
arrowDropdownSidebar.onclick = function () {
  arrowDownSidebar.classList.toggle("hidden");
  arrowUpSidebar.classList.toggle("hidden");
  featListSidebar.classList.toggle("hidden");
};

arrowDropdownCompanySidebar.onclick = function () {
  arrowDownCompanySidebar.classList.toggle("hidden");
  arrowUpCompanySidebar.classList.toggle("hidden");
  companyListSidebar.classList.toggle("hidden");
};
