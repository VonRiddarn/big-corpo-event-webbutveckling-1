/* 
	This file handles the global routing state.
	How it works is that it simply calculates the current route using a tokenized URL each refresh.
*/

// Tokenize the URL into an array of ["https:", ... "index.html"]
export const urlTokens = document.URL.split("/");

// Take the last element and tokenize it into [name, type] and extract the name (route). ["index", "html"]
export const currentRoute = urlTokens[urlTokens.length - 1].split(".")[0];

export const isRoute = (route) => {
	return route.toUpperCase() === currentRoute.toUpperCase();
};
