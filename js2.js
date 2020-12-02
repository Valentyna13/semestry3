function changeDesign(input) {
	var id = input.id;
	if (id == "f") {
		alert("Первый стиль");
	}
	if (id == "s") {
		alert("Второй стиль");
		document.getElementById('bb12').style.color="green";
	}
	if (id == "t") {
		alert("Третий стиль");
		document.getElementById('bb12').style.backgroundColor="red";
	}
}
