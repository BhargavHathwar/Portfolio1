function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-profile-container"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "assets/profile-animation.json",
  });
});
