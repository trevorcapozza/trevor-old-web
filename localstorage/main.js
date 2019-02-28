/* eslint-env browser, jquery */

$(document).ready(function() {
  var darkMode = localStorage.getItem('dark') || false;
  $('ul').click(function() {
    $('ul').toggleClass('active')
    $('section').toggleClass('dark');
    darkMode = !darkMode;
    localStorage.setItem("dark", darkMode);
  });
});
