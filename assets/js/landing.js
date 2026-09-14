// Close the collapsed mobile menu after jumping to a section on the home page.
$(function() {
  $('#main-navbar a.nav-link[href*="#"]').on('click', function() {
    $('#main-navbar').collapse('hide');
  });
});
