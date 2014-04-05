window.onload = function() {

	var name = document.getElementById("name");
	name.innerHTML = "Manisha";

	var sum = document.getElementById("sum");
	sum.innerHTML = 24 + 56 + 111;

	var shouldIGetAHairCut = true;
	var haircut = document.getElementById("haircut");

	//if the true/false variable came from another service, then this latter part would be useful

	if (shouldIGetAHairCut) {
		haircut.innerHTML = "Yes, you should."
	}
}
