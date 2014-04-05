var d = document;
var entryField = d.getElementById("newEntry");
var total = 0;

d.getElementById("entry").onsubmit = addNewEntry;

function addNewEntry() {
	
	var entry = parseFloat(entryField.value);
	total += entry;
	console.log(total);
	//start here to unravel the code

	var entryValue = convertCurrency(entryField.value);
	//take the value of entryField and save it in entryValue
	//console.log(entryValue);

	var entryRow = "<tr><td></td><td>" + entryValue + "</td></tr>";
	//saving this as variable for shorthand

	d.getElementById("entries").innerHTML += entryRow;
	//selects entries id and inner html inserts stuff inside
	//those tags in this case it will be the table syntax with
	//the dynamically populated rows

	d.getElementById("total").innerHTML = convertCurrency(total);

	clearInput();

	return false;
	//this prevent default behaviour of a form submission
	//which is to send the data off and refresh the page
}

function convertCurrency(entryValue) {
	var currency = parseFloat(entryValue);
	currency = currency.toFixed(2);
	currency = "£" + currency;
	return currency;
}

