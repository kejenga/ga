function helloWorld() {
	console.log("Hello M!")
}

helloWorld();

//function with arguments

function addAndPrint(num1, num2) {
	var sum = num1 + num2;
	console.log(sum);
}

addAndPrint(1, 5);

//javascript concatination

function multiplyAndPrint(num3, num4) {
	var multiplication = num3 * num4;
	console.log("The multiplication is: " + multiplication);
}

multiplyAndPrint(4, 5);

//anon function & returning a value

var division = function(num5, num6) {
	return num5 / num6;
}

console.log(division(8,2));


//age and name
function nameAndAge(name, age) {
	return name + " is" + ". Age is " + age;
}

console.log(nameAndAge("Manisha", 26));

