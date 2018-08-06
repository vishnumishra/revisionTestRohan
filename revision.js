var r = {};

r.fibonacci = function (position) {
	if (position < 1) return;

	if (Math.floor(position) != position) return;

	if (position === 1) {
		return 0;
	};
	if (position === 2) {
		return 1;
	}

	return r.fibonacci(position - 1) + r.fibonacci(position - 2);
}

r.readBinary = (binaryNum) => {

};

r.reverseText = function (text) {
	var splitString = text.split("");
	var reverseArray = splitString.reverse();
	var joinArray = reverseArray.join("");
	return joinArray;
}

r.getVowelCount = function (text) {
	var vowel = 0, i;
	var string = text.toString();
	for (i = 0; i < string.length - 1; i++) {
		if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
			vowel++;
		}
		if (string.charAt(i) == "A" || string.charAt(i) == "E" || string.charAt(i) == "I" || string.charAt(i) == "O" || string.charAt(i) == "U") {
			vowel++;
		}
	}
	return vowel;

}

r.tidyText = function (text) {

}

r.reverseWords = function (text) {

}

r.welcome = function (text) {
	if (text == text) {
		return "hello text";
	}
}

r.factorial= function (num) {
	
	for(var i=1;i<=num;i++){
		num=num*i;
	}
	return num;
}

r.findBestVowelWord = function (text){
	
}
	
exports.r = r;

