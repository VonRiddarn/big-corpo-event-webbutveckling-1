import "./nav-injector.js"; // Runs the injector script and makes sure we have a nav bar.
console.log("Hello world!");

document.getElementById("call-to-action-btn")?.addEventListener("click", (e) => {
	window.location.href = "../pages/pricing.html";
});

const cards = document.getElementsByClassName("pricing-card");

for (const card of cards) {
	card.addEventListener("click", (e) => {
		window.alert("Your credit card has been drained. Thank you for your purchase.");
	});
}
