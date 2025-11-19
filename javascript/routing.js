/* 
	This file handles the global routing state.
	How it works is that it simply calculates the current route using a tokenized URL each refresh.
*/

// Define global router object
window.router = window.router || {};

// Tokenize the URL into an array of ["https:", ... "index.html"]
const urlTokens = document.URL.split("/");

// Take the last element and tokenize it into [name, type] and extract the name (route). ["index", "html"]
window.router.currentRoute = urlTokens[urlTokens.length - 1].split(".")[0];

window.router.isRoute = (route) => {
	return route.toUpperCase() === window.router.currentRoute.toUpperCase();
};
