exports.count = function(begin, end) {
	
	var output = begin, count = begin;

	for (count = begin; count <= end; count += 1 ) {
        space = count > begin ? " " : " ";
		output = output + " " + exports.buzzer(fizzer(fizzbuzzer(count+1)));
    }

	//return, e.g. "1 2 3 4 5"
	return output;
};

exports.fizzer = function(num) {
    if(0 === num % 3)   {
    return "fizz";
}
    return num;

    //return 0 === num % 3 ? "fizz" : num;        this can replace the previous code
}; // ternary operator- if() {do A} else {do B}

exports.buzzer = function(num) {
    if(0 === num % 5)   {
    return "buzz";
}
    return num;

};

exports.fizzbuzzer = function(num) {
    if(0 === num % 15)   {
    return "fizzbuzz";
}
    return num;

};
