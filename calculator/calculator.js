function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	const result = arr.reduce((total, num) => {
		return total + num;
	}, 0);

	return result;
}

function multiply (arr) {
	const result = arr.reduce((total, num) => {
		return total * num;
	}, 1);

	return result;
}

function power(num, exp) {
	let result = num;
	let i = 1;

	while (i < exp){
		result *= num;

		i++
	}

	return result;
}

function factorial(num) {
	if (num <= 1){
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}