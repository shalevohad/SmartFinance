$(document).ready(function () {
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");
  $(backToTop).hide();

  let scrolled = false;
  window.onscroll = function () {
    if (window.pageYOffset > 100) {
      navbar.classList.remove('top');
      if (!scrolled) navbar.style.transform = 'translateY(-70px)';
      setTimeout(function () {
        navbar.style.transform = 'translateY(0)';
        scrolled = true;
      }, 200);

    }
    else {
      navbar.classList.add('top');
      scrolled = false;
    }

    // Back To Top Button
    if (window.pageYOffset > window.innerHeight * 0.5) {
      $(backToTop).show();
    }
    else {
      $(backToTop).hide();
    }
  }
});