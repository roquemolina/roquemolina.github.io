export default function hamburguerMenu(panelBtn, panel, menuLink) {
  const d = document;

  d.addEventListener('click', e => {
    if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }

    if(e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
};


/*

// Look for .hamburger
let hamburger = document.querySelector(".hamburger");
let panel = document.querySelector(".panel");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  
  });
  */