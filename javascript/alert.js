/* 
	This file is a backup alert made for anyone opening the website without a live server by doubble clicking the index file.
	Thus, informing them of their mistake so that they are aware of why the site does not work propperly.
*/

const urlTokens = document.URL.split("/");

if (urlTokens[0] !== "https:" && urlTokens[0] !== "http:")
	window.alert(
		"Your page is running from a local file and cannot load certain elements. To fix this issue, please open the site as a live server. "
	);
