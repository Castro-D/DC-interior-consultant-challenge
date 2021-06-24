const menu = document.querySelector(".menu");
const ham = document.querySelector("#hamburger");
const xIcon = document.querySelector(".xIcon");
const menuIcon = document.querySelector(".menuIcon");
const menuLinks = document.querySelectorAll(".menuLink");
const container = document.querySelector('section');

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
    document.body.style['overflow-y'] = 'auto';
    container.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
    container.style.display = "none";
    document.body.style['overflow-y'] = 'hidden';
  }
}

ham.addEventListener("click", toggleMenu);
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleMenu);
  }
)