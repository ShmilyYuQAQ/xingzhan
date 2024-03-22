// document.getElementById("mainnav");
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    document.getElementById("mainnav").classList.add('navbar-fixed');
  } else {
    document.getElementById("mainnav").classList.remove('navbar-fixed');
  }
});