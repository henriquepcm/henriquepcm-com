"use strict";

// Select elements' IDs
const burger = document.getElementById("burger");
const menuBackground = document.getElementById("menu-background");
const close = document.getElementById("close");
const body = document.body;
const logo = document.getElementById("logo");

// Opens the Menu
function openMenu() {
  menuBackground.classList.remove("hidden");
  body.classList.add("overflow-hidden");
}

// Closes the Menu
function closeMenu() {
  menuBackground.classList.add("hidden");
  body.classList.remove("overflow-hidden");
}

//Add event listener to the burger menu and menu's background
burger.addEventListener("click", openMenu);
menuBackground.addEventListener("click", closeMenu);

// Close the Menu if a click happens anywhere on the screen
document.addEventListener("click", function (e) {
  const isBurgerClick = burger.contains(e.target);
  if (!isBurgerClick) {
    closeMenu();
  }
});

//Function to create menu links and logo to their respective section
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id^='section']"); // Select sections' IDs
  const menuItems = document.querySelectorAll("#menu a"); // Select Menu Items
  const logo = document.getElementById("logo"); // Select Logo
  const main = document.querySelector("main"); // Select <main>

  //Function to hide all sections
  function hideSections() {
    sections.forEach((section) => {
      section.classList.add("hidden");
    });
  }

  // Hide all sections except the one that got clicked
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1); // Get the target section and removes "#"
      hideSections(); // hide all sections
      document.getElementById(targetId).classList.remove("hidden"); // show the one that got clicked
      console.log(targetId);

      // Add or Remove classes to display content centralized (or not) on the screen
      if (["section-home", "section-about"].includes(targetId)) {
        main.classList.add("h-full");
        main.classList.remove("mt-10");
      } else {
        {
          main.classList.remove("h-full");
          main.classList.add("mt-10");
        }
      }
    });
  });

  //Add click to the logo
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    hideSections(); // hide all sections
    sections[0].classList.remove("hidden"); // open the home section
    main.classList.add("h-full");
    main.classList.remove("mt-10");
  });
});
