$(document).ready(function() {


var list = "";
var fizzbuzz = document.getElementById("fizzbuzz");

for (var i = 1; i <= 100; i++) {
	list += '<li>';

	if ((i % 3 === 0) && (i % 5 === 0)) {
		// divisible by both 3 and 5
		list += "fizz buzz";
	} else if ((i % 3 === 0) && (i % 5 !== 0)) {
		// divisible by 3 and not 5
		list += "fizz";
	} else if ((i % 3 !== 0) && (i % 5 === 0)) {
		// divisible by 5 and not 3
		list += "buzz";
	} else {
		list += i;
	}
	
	list += '</li>';
}

fizzbuzz.innerHTML += list;

console.log(list);
console.log(fizzbuzz);
});