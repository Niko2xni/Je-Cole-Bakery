var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("desktop-navbar").style.top = "0";
    document.getElementById("mobile-navbar").style.top = "0";
  } else {
    document.getElementById("desktop-navbar").style.top = "-100px";
    document.getElementById("mobile-navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}  