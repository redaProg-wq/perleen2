// variables


// variables pour le menu mobile
const iconeMenu = document.querySelector(".fa-bars"); // pour le menu mobile
const menuMobile = document.querySelector(".div-menu-mobile"); // pour le menu mobile



//variables pour le glissement du menu




// Traitements

// traitements pour le menu mobile

iconeMenu.addEventListener("click", function () {
  menuMobile.classList.toggle("div-monte-descend");
  iconeMenu.classList.toggle("rotation");
});

menuMobile.addEventListener("click", function () {
  menuMobile.classList.toggle("div-monte-descend");
  iconeMenu.classList.toggle("rotation");
});
