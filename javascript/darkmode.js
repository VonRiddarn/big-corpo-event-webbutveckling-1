/*
	This file ccontains the darkmode toggle logic. That includes the button component as well as the runtime state toggle.
	It works by simply saving the current darkmode setting to the sessions storage and update the html element with the correct state.
	Pre-loading the darkmode on page load happens in "darkmode-load.js"
*/

console.log("Initializing darkmode state...");
let darkMode = sessionStorage.getItem("darkmode") === "true";
const rootEl = document.documentElement;
const btn = document.createElement("button");

const applyDarkMode = () => {
	if (darkMode) rootEl.classList.add("darkmode");
	else rootEl.classList.remove("darkmode");
};

const toggleDarkMode = () => {
	darkMode = !darkMode;
	sessionStorage.setItem("darkmode", darkMode.toString());
	applyDarkMode();
};

const updateButton = () => {
	// Hacky af, but I can't be bothered to make tools more advanced than the thing they fix rn
	btn.classList = darkMode ? "darkmode-button darkmode-button--active" : "darkmode-button";
	btn.innerHTML = darkMode ? "🌑" : "☀️";
};

// Always called by the navigation component, meaning this also acts as a "first render" logic container.
window.darkmodeButton = () => {
	btn.addEventListener("click", () => {
		toggleDarkMode();
		updateButton();
	});

	updateButton();
	return btn;
};
