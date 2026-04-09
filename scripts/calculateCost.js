const calculateCostBtn = document.getElementById("calculate-total-btn");

calculateCostBtn.addEventListener('click', () => {
	let item1 = document.getElementById("item1").value;
	let item2 = document.getElementById("item2").value;
	let item3 = document.getElementById("item3").value;
	let item4 = document.getElementById("item4").value;

	let total =
		(item1 * 42) +
		(item2 * 42) +
		(item3 * 56) +
		(item4 * 69);

	alert("Total cost: RM " + total.toFixed(2));
});
