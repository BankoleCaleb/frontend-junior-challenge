let button = document.querySelector("button");
let overlay = document.getElementById("mobile-nav-bar")
let hamburger = document.getElementById("open");
let close = document.getElementById("close");
let caret = document.querySelectorAll("img[alt='down or up']");
let dropdown = 
document.querySelectorAll("#mobile-nav-bar .dropdown");
let collapsed = 
document.querySelectorAll("#mobile-nav-bar .collapsed-menu");

// console.log(collapsed)

dropdown.forEach(el => {
  el.addEventListener("click", () => {
    caret.forEach(caret => {
      caret.classList.toggle("caret-down");
    });
    collapsed.forEach(menu => {
      menu.classList.toggle("expanded");
    });
  });
});

close.onclick = () => {
  overlay.classList.remove("fadein");
};

hamburger.onclick = () => {
  overlay.classList.add("fadein");
};