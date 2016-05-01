var fb = require('../fizzbuzz');

describe("A program the plays fizzbuzz", function() {

	it("counts from 1 to 100", function() {
		expect(fb.count(1,6)).toBe("1 2 fizz 4 buzz fizz")
		expect(fb.count(10,15)).toBe("buzz 11 fizz 13 14 fizzbuzz")
	});

	it("can take multiples of 3 and return 'fizz'", function() {
		expect(fb.fizzer(3)).toBe('fizz');
		expect(fb.fizzer(9)).toBe('fizz');
		expect(fb.fizzer(18)).toBe('fizz');
	}); 

	it("can take a number and return 'buzz' for mutiples of 5", function () {
		expect(fb.buzzer(5)).toBe('buzz');
		expect(fb.buzzer(10)).toBe('buzz');
		expect(fb.buzzer(20)).toBe('buzz');
	});	

	it("can take a number and return 'fizzbuzz' for mutiples of 15", function () {
		expect(fb.fizzbuzzer(15)).toBe('fizzbuzz');
		expect(fb.fizzbuzzer(30)).toBe('fizzbuzz');
		expect(fb.fizzbuzzer(45)).toBe('fizzbuzz');
	});	
});