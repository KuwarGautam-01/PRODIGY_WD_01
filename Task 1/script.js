const menu = document.querySelector(".menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    menu.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    menu.style.position = "fixed";
    menu.style.top = "0";
    menu.style.left = "0";
    menu.style.width = "100%";
    menu.style.zIndex = "1000";

    menu.querySelectorAll("a").forEach(link => {
      link.style.color = "gold";
    });
  } 
  else {
    menu.style.backgroundColor = "black";
    menu.style.position = "static";
    menu.style.top = "";
    menu.style.left = "";
    menu.style.width = "";

    menu.querySelectorAll("a").forEach(link => {
      link.style.color = "white";
    });
  }
});
