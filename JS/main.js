document.getElementById("botton-menu").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
});

const currentUrl = window.location.href;
const menuLinks = document.querySelectorAll('#menu ul li a');

menuLinks.forEach(link => {
    if (link.href === currentUrl) {
        link.classList.add('active');
    }
});
