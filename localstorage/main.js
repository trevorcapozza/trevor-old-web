/* eslint-env browser, jquery */

$(document).ready(function(){
    $('ul').click(function(){
        $('ul').toggleClass('active')
$("section").toggleClass("dark");
let darkThemeEnabled = $("section").hasClass("dark");
localStorage.setItem("dark-theme-enabled", darkThemeEnabled);
    })
})

if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
    $('section').toggleClass('dark');

    $('ul').toggleClass('active');  
}
