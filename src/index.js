const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	const space = '**********';
	const morsewords = expr.split(space);
	const decodedWorld = [];
	morsewords.forEach((morseword) => {
		let str = '';
		for (let i = 0; i < morseword.length / 10; i++) {
			const morse = parseInt(morseword.slice(i * 10, 10 * i + 10))
				.toString()
				.replaceAll(/(10|11)/g, (x) => {
					if (x.toString() === '00') return;
					if (x.toString() === '10') return '.';
					if (x.toString() === '11') return '-';
				});
			str += MORSE_TABLE[morse];
		}
		decodedWorld.push(str);
	});
	return decodedWorld.join(' ');
}

module.exports = {
	decode,
};
