function changeDesign(input) {
	var id = input.id;
	var elem = document.getElementById("my_form");
	elem.classList.remove("first","second","third");
	if (id == "f") {
		elem.classList.add("first");
		alert("Первый стиль");
	}
	if (id == "s") {
		elem.classList.add("second");
		alert("Второй стиль");
	}
	if (id == "t") {
		elem.classList.add("third");
		alert("Третий стиль");
	}
}