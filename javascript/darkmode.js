/*
	This file ccontains the darkmode logic. That includes the button component as well as the persistent state.
	It works by simply saving the current darkmode setting to the sessions storage and reads it each time the button is created.

	Since the button needs to be recreated through the "darkModeButton" export each time a new HTML file is opened / refreshed this should do fine.
	State management could be its own system entirely, but this is a simple hack to make it work without over-engineering it.
*/

let darkMode = sessionStorage.getItem("darkmode") === "true";
const bodyEl = document.body;
const btn = document.createElement("button");

const applyDarkMode = () => {
	if (darkMode) bodyEl.classList.add("darkmode");
	else bodyEl.classList.remove("darkmode");
};

const toggleDarkMode = () => {
	darkMode = !darkMode;
	sessionStorage.setItem("darkmode", darkMode.toString());
	applyDarkMode();
};

const updateButton = () => {
	btn.classList = darkMode ? "darkmode-button--darkmode" : "darkmode-button--lightmode";
	btn.innerHTML = darkMode ? "🌙" : "☀️";
};

// Always called by the navigation component, meaning this also acts as a "first render" logic container.
export const darkmodeButton = () => {
	btn.addEventListener("click", () => {
		toggleDarkMode();
		updateButton();
	});

	updateButton();
	return btn;
};

applyDarkMode();
