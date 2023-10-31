const UserLoginBtn = document.querySelector(".js-log-menu-btn");
const navToggleBtn = document.querySelector(".js-nav-toggle");
const loginMenu = document.querySelector(".js-login-menu");
const navMenu = document.querySelector(".js-mobile-nav");

UserLoginBtn.addEventListener("click", () => {
  menuOpenCloser("display-off",loginMenu);
});

navToggleBtn.addEventListener("click", ()=>{
    menuOpenCloser("display-off",navMenu)
});

function menuOpenCloser(className, menuItem) {
  if (menuItem.classList.contains(className)) {
    menuItem.classList.remove(className);
  } else {
    menuItem.classList.add(className);
  }
}


//navbar-scroll-effect
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}