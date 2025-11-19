console.log("Hello world!");

document.getElementById("call-to-action-btn")?.addEventListener("click", (e) => {
	window.location.href = "./pricing.html";
});

const cards = document.getElementsByClassName("pricing-card");

for (const card of cards) {
	card.addEventListener("click", (e) => {
		window.alert("Your credit card has been drained. Thank you for your purchase.");
	});
}
