const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 200,
  // reset:true
});

sr.reveal(`.intro`, {
  delay: 200,
  origin: "top"
});
sr.reveal(`.my-services`, {
  delay: 200
});

sr.reveal(`.about-me`, {
  delay: 200,
  origin: "right"
});