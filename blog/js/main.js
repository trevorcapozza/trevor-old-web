/*jshint esversion: 6 */ 

let darkThemeEnabled;

$(document).ready(() => {
	const store = localStorage.getItem("dark-theme-enabled");
	const bool = JSON.parse(store); // convert "false"/"true" to false/true
	if (bool) {
		darkThemeEnabled = true;
		$("body").toggleClass("dark");
		$("ul").toggleClass("active");
		$("code").toggleClass("dark");
	}

	$("ul").click(() => {
		$("ul").toggleClass("active");
		$("body").toggleClass("dark");
		$("code").toggleClass("dark")
		darkThemeEnabled = !darkThemeEnabled;
		localStorage.setItem("dark-theme-enabled", darkThemeEnabled);
	});
});
