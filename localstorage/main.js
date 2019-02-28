/* eslint-env browser, jquery */

let darkThemeEnabled;

$(document).ready(() => {
	const store = localStorage.getItem("dark-theme-enabled");
	const bool = JSON.parse(store); // convert "false"/"true" to false/true
	if (bool) {
		darkThemeEnabled = true;
		$("section").toggleClass("dark");
		$("ul").toggleClass("active");
	}

	$("ul").click(() => {
		$("ul").toggleClass("active");
		$("section").toggleClass("dark");
		darkThemeEnabled = !darkThemeEnabled;
		localStorage.setItem("dark-theme-enabled", darkThemeEnabled);
	});
});
