/* 
	Singular self contained check that is used to apply darkmode when switching pages.
	We do this by utilizing the darkmode variable from the session storage.

	Reason: 
		We need this in a non-defer JS file so that it is applied before rendering, otherwise we would get a FOUC.
*/

if (sessionStorage.getItem("darkmode") === "true") {
	document.documentElement.classList.add("darkmode");
}
