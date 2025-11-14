/*
	This systems purpose is to create and supply a navbar component that can be supplied to several HTML pages.
	The drawback of creating the navbar using JavaScript is that it could technically affect SEO, but that's not a factor for this project.

	Responsibility ovelap: 
		This file handles both navbar injection AND routing.
		It could be neat to transfer routing into its own file for clearer responsibility and readability
*/

import { darkmodeButton } from "./darkmode.js";
console.log("Injecting navbar...");

// Create and store references for the navbar root object and the navbar list root.
const navbar = document.createElement("nav");
const routeList = navbar.appendChild(document.createElement("ul"));

// Create and append routes to the navbar
addRoutes(["Home", "Pricing", "Contact"], navbar);
navbar.appendChild(darkmodeButton());

// Append the navbar to the body
document.body.appendChild(navbar);

// ----- Methods -----
// Using function keyword for hoisting, this keeps the declaration out of the way and the code clean.
function addRoutes(routes, parent) {
	// Tokenize the URL into an array of ["https:", ... "index.html"]
	const urlTokens = document.URL.split("/");
	// Take the last element and tokenize it into name, type and extract the name (route). ["index", "html"]
	const currentRoute = urlTokens[urlTokens.length - 1].split(".")[0];

	for (let i = 0; i < routes.length; i++) {
		const elementRoute = routes[i];
		console.log(currentRoute);
		console.log(elementRoute);
		const selected =
			(i === 0 && currentRoute === "index") ||
			elementRoute.toUpperCase() === currentRoute.toUpperCase();

		// We could and add type safety, but I will opt for the classic JS "trust me bro" convention.
		const li = parent.appendChild(document.createElement("li"));
		const p = li.appendChild(document.createElement("p"));
		console.log(document.URL.split("/"));
		p.innerHTML = elementRoute;

		// Add BEM for styling purposes
		li.classList.add("route");
		if (selected) li.classList.add("route--selected");
	}
}
