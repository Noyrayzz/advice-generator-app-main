const apiUrl = "https://api.adviceslip.com/advice";
const adviceId = document.getElementById("adviceId");
const adviceSlip = document.getElementById("adviceSlip");
const button = document.getElementById("buttons");

button.addEventListener("click", () => {
	fetch(apiUrl)
		.then((Response) => {
			if (!Response.ok) {
				throw new console.error("api nya ga jelas");
			}
			return Response.json();
		})
		.then((data) => {
			const id = data.slip.id;
			const advice = data.slip.advice;
			adviceId.innerHTML = `${id}`;
			adviceSlip.innerHTML = `<span>${advice}</span>`;
		})

		.catch((error) => {
			console.error("error:", error);
		});
});
