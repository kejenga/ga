$(function() {
   
	var myArr = ['hello', , 54.3, true];

	console.log(myArr);

	console.log(myArr[0]);
	console.log(myArr[1]);

	myArr[1]="Stuff";

	console.log(myArr[1]);

	var fruits = ["Apples", "Oranges", "Pears"]

	myArr = fruits; 

	console.log(myArr[0]);

	// Return number of items in array - .lenth

	console.log(myArr.length);

	//enter a value to the end of the list

	myArr.push("Strawberries");
	console.log(myArr);

// the below onlyremoves the last one

	myArr.pop();
	console.log(myArr);

// first value is index and position where you want to add
// second is how many variables you remove
// third is the actual value to be entered
	myArr.splice(2, 0, "Mango");
	console.log(myArr);


//selecting a class attribute and updating it

var className = $("h1").attr("class");
console.log(className);



className = $("h1").attr("class", "new-heading");
//class = what the attribute was, the second part is the replacement

//forEach loops
var names = ["Daniel", "James", "CJ"];

names.forEach(function(element, index) {
	console.log(element, index);
});
//for each element, will console log the name and the index value

});