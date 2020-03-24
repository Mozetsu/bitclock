// get columns
const HourColumn = document.querySelector('.H-squares');
const hourColumn = document.querySelector('.h-squares');
const MinuteColumn = document.querySelector('.M-squares');
const minuteColumn = document.querySelector('.m-squares');
const SecondColumn = document.querySelector('.S-squares');
const secondColumn = document.querySelector('.s-squares');

// get decimal values
const HourValue = document.querySelector('.Hv');
const hourValue = document.querySelector('.hv');
const MinuteValue = document.querySelector('.Mv');
const minuteValue = document.querySelector('.mv');
const SecondValue = document.querySelector('.Sv');
const secondValue = document.querySelector('.sv');

// get binary values
const HourBinary = document.querySelector('.Hb');
const hourBinary = document.querySelector('.hb');
const MinuteBinary = document.querySelector('.Mb');
const minuteBinary = document.querySelector('.mb');
const SecondBinary = document.querySelector('.Sb');
const secondBinary = document.querySelector('.sb');

const currentYear = document.getElementById('year');

const colors = ['#b076df', '#ad7ecc', '#cf5a74', '#dd6996', '#db985a', '#e2c076'];

const setRandomColor = () => {
	const i = Math.floor(Math.random() * 6);
	document.querySelector('#mozetsu').style.color = colors[i];
	document.querySelector('#bit').style.backgroundColor = colors[i];
};

setRandomColor();

// sets current year at footer
const date = new Date();
currentYear.innerText = date.getFullYear();

// imediately sets clock values
setTimeout(() => {
	updateHour();
}, 0);

// refresh clock
setInterval(() => {
	updateHour();
}, 1000);

// refresh clock
setInterval(() => {
	setRandomColor();
}, 1000 * 30);

// get individual values of the given time
const getSingleValues = value => {
	value < 10 ? (value = '0' + value) : value;
	const arr = value.toString().split('');
	return { leftValue: arr[0], rightValue: arr[1] };
};

// converts decimal number to binary
const decimalToBinary = number => {
	const binaryArr = (number >>> 0).toString(2).split('');

	for (let i = 4 - binaryArr.length; i > 0; i--) {
		binaryArr.unshift(0);
	}

	return binaryArr.toString().replace(/,/g, '');
};

const turnOnBit = (column, binary) => {
	const arr = binary.split('').reverse();

	for (let i = 0; i < 4; i++) {
		if (arr[i] === '1') {
			column.children[i].classList.add('on');
			column.children[i].innerText = Math.pow(2, [i]);
		} else {
			column.children[i].classList.remove('on');
			column.children[i].innerText = '';
		}
	}
};

// converts 24h format to 12h
const formatAMPM = hour => {
	const ampm = hour >= 12 ? 'pm' : 'am';
	const formattedHour = hour % 12;
	formattedHour = formattedHour ? formattedHour : 12; // the hour '0' should be '12'
	return formattedHour;
};

// get the current time
const updateHour = () => {
	const date = new Date();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	// set hours
	HourValue.innerText = getSingleValues(hour).leftValue;
	HourBinary.innerText = decimalToBinary(getSingleValues(hour).leftValue);
	turnOnBit(HourColumn, decimalToBinary(getSingleValues(hour).leftValue));

	hourValue.innerText = getSingleValues(hour).rightValue;
	hourBinary.innerText = decimalToBinary(getSingleValues(hour).rightValue);
	turnOnBit(hourColumn, decimalToBinary(getSingleValues(hour).rightValue));

	// set minutes
	MinuteValue.innerText = getSingleValues(minutes).leftValue;
	MinuteBinary.innerText = decimalToBinary(getSingleValues(minutes).leftValue);
	turnOnBit(MinuteColumn, decimalToBinary(getSingleValues(minutes).leftValue));

	minuteValue.innerText = getSingleValues(minutes).rightValue;
	minuteBinary.innerText = decimalToBinary(getSingleValues(minutes).rightValue);
	turnOnBit(minuteColumn, decimalToBinary(getSingleValues(minutes).rightValue));

	// set seconds
	SecondValue.innerText = getSingleValues(seconds).leftValue;
	SecondBinary.innerText = decimalToBinary(getSingleValues(seconds).leftValue);
	turnOnBit(SecondColumn, decimalToBinary(getSingleValues(seconds).leftValue));

	secondValue.innerText = getSingleValues(seconds).rightValue;
	secondBinary.innerText = decimalToBinary(getSingleValues(seconds).rightValue);
	turnOnBit(secondColumn, decimalToBinary(getSingleValues(seconds).rightValue));
};
