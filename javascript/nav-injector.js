/*
	This systems purpose is to create and supply a navbar component that can be supplied to several HTML pages.
	The drawback of creating the navbar using JavaScript is that it could technically affect SEO, but that's not a factor for this project.
*/

import { darkmodeButton } from "./darkmode.js";
import { currentRoute, isRoute } from "./routing.js";
console.log("Injecting navbar...");

// Create and store references for the navbar root object and the navbar list root.
let isActive = sessionStorage.getItem("navbar") === "true";
const navbar = document.createElement("nav");
navbar.classList.add("navbar");
const ul = navbar.appendChild(document.createElement("ul"));

// Create and append routes to the navbar
addRoutes(["Home", "Pricing", "Contact"], ul);
navbar.appendChild(darkmodeButton());

// Create the toggle button
const navBtn = document.createElement("button");
navBtn.classList.add("navbar-button");

navBtn.addEventListener("click", () => {
	setIsActive(!isActive);
});

// Append items
document.body.appendChild(navBtn);
document.body.appendChild(navbar);

applyState();

// ----- Methods -----
// Using function keyword for hoisting, this keeps the declaration out of the way and the code clean.
function addRoutes(routes, parent) {
	for (let i = 0; i < routes.length; i++) {
		const elementRoute = routes[i];
		const selected = (i === 0 && currentRoute === "index") || isRoute(elementRoute);

		// We could and add type safety, but I will opt for the classic JS "trust me bro" convention.
		const li = parent.appendChild(document.createElement("li"));
		const a = li.appendChild(document.createElement("a"));
		a.href = i == 0 ? "/index.html" : `/pages/${elementRoute}.html`;
		a.innerHTML = elementRoute;
		a.addEventListener("click", (e) => {
			// Override default navigation logic to inject a state change before redirecting.
			// Injected method is disabled for now, but might be something we want later.
			e.preventDefault();
			setIsActive(false);
			window.location.href = a.href;
		});

		// Add BEM for styling purposes
		li.classList.add("route");
		if (selected) li.classList.add("route--selected");
	}
}

function setIsActive(newState) {
	isActive = newState;
	sessionStorage.setItem("navbar", isActive.toString());

	applyState();
}

function applyState() {
	if (isActive) {
		navbar.classList.add("navbar--active");
		navBtn.classList.add("navbar-button--active");
	} else {
		navbar.classList.remove("navbar--active");
		navBtn.classList.remove("navbar-button--active");
	}

	navBtn.innerHTML = isActive ? "✖️" : "🟰";
}
