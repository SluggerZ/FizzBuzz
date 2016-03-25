//var count, fizzer, buzzer, fizzbuzzer;
exports.count = function(begin, end) {
	
	var output = begin, count = begin;

	for (count = begin; count <= end; count += 1 ) {
		output = output + " " + exports. buzzer(fizzer(i));
    }

	//return, e.g. "1 2 3 4 5"
	return output;
};

exports.fizzer = function(num) {
    if(0 === num % 3)   {
    return "fizz";
}
    return numb;

    //return 0 === num % 3 ? "fizz" : num;        this can replace the previous code
}; // ternary operator- if() {do A} else {do B}

exports.buzz = function(num) {
    if(0 === num % 5)   {
    return "buzz";
}
    return numb;

};

exports.fizzbuzz = function(num) {
    if(0 === num % 15)   {
    return "fizzbuzz";
}
    return numb;

};

/*module.exports = {
    count: count
    fizzer: fizz
    buzzer: buzz
    fizzbuzzer: fizzbuzz

}
// could use for whole program
/*for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
/*

// if()- conditional statement evaluates to true or false
// - a Finder (usr/local/bin)