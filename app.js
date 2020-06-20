const bodyHTML = document.querySelector('body');
const themeBtn = document.querySelector('.fa-sun');
themeBtn.addEventListener('click', () => changeTheme(bodyHTML));

// time variables -------------------------------------------------------------
const hoursDecimal = document.querySelector('.hours').children[0];
const hoursUnit = document.querySelector('.hours').children[1];

const minutesDecimal = document.querySelector('.minutes').children[0];
const minutesUnit = document.querySelector('.minutes').children[1];

const secondsDecimal = document.querySelector('.seconds').children[0];
const secondsUnit = document.querySelector('.seconds').children[1];

// binary variables -------------------------------------------------------------
const hourDecimalBinaryHTML = document.querySelector('.hour-decimal');
const hourUnitBinaryHTML = document.querySelector('.hour-unit');

const minutesDecimalBinaryHTML = document.querySelector('.minutes-decimal');
const minutesUnitBinaryHTML = document.querySelector('.minutes-unit');

const secondsDecimalBinaryHTML = document.querySelector('.seconds-decimal');
const secondsUnitBinaryHTML = document.querySelector('.seconds-unit');

function changeTheme(elem) {
	const currentTheme = elem.classList[0];
	const newTheme = currentTheme === 'light' ? 'dark' : 'light';
	elem.classList.remove(currentTheme);
	elem.classList.add(newTheme);
	localStorage.setItem('theme', newTheme);
}

verifyTheme();
function verifyTheme() {
	const savedTheme = !localStorage.getItem('theme') ? 'light' : localStorage.getItem('theme');
	if (bodyHTML.classList[0] !== savedTheme) changeTheme(bodyHTML);
}

setTimeout(setSmoothTransition, 100);
function setSmoothTransition() {
	bodyHTML.style.transition = 'background-color .3s ease-in-out';
	document.querySelector('.page-title').style.transition = 'background-color .3s ease-in-out';
	document
		.querySelectorAll('.binary-cell')
		.forEach((cell) => (cell.style.transition = 'background-color .3s ease-in-out'));
}

updateTimeUI(); // imediately updates time on page load
setInterval(updateTimeUI, 1000); // set interval of 1 sec to update time
function updateTimeUI() {
	document.querySelectorAll('.binary-cell').forEach((bit) => bit.classList.remove(bit.classList[1]));
	// ---------------------------------------------------------------------
	const globalTime = new Date();
	const currHour = globalTime.getHours().toString().split('');
	if (currHour.length === 1) currHour.unshift(0);
	const currMinutes = globalTime.getMinutes().toString().split('');
	if (currMinutes.length === 1) currMinutes.unshift(0);
	const currSeconds = globalTime.getSeconds().toString().split('');
	if (currSeconds.length === 1) currSeconds.unshift(0);
	// ---------------------------------------------------------------------
	hoursDecimal.innerHTML = currHour[0];
	hoursUnit.innerHTML = currHour[1];

	minutesDecimal.innerHTML = currMinutes[0];
	minutesUnit.innerHTML = currMinutes[1];

	secondsDecimal.innerHTML = currSeconds[0];
	secondsUnit.innerHTML = currSeconds[1];

	const hourDecimalBinary = parseInt(currHour[0]).toString(2).split('').reverse();
	hourDecimalBinary.forEach((bit, i) => {
		if (bit > 0) return hourDecimalBinaryHTML.children[i].classList.add('active');
	});

	const hourUnitBinary = parseInt(currHour[1]).toString(2).split('').reverse();
	hourUnitBinary.forEach((bit, i) => {
		if (bit > 0) return hourUnitBinaryHTML.children[i].classList.add('active');
	});

	const minutesDecimalBinary = parseInt(currMinutes[0]).toString(2).split('').reverse();
	minutesDecimalBinary.forEach((bit, i) => {
		if (bit > 0) return minutesDecimalBinaryHTML.children[i].classList.add('active');
	});

	const minutesUnitBinary = parseInt(currMinutes[1]).toString(2).split('').reverse();
	minutesUnitBinary.forEach((bit, i) => {
		if (bit > 0) return minutesUnitBinaryHTML.children[i].classList.add('active');
	});

	const secondsDecimalBinary = parseInt(currSeconds[0]).toString(2).split('').reverse();
	secondsDecimalBinary.forEach((bit, i) => {
		if (bit > 0) return secondsDecimalBinaryHTML.children[i].classList.add('active');
	});

	const secondsUnitBinary = parseInt(currSeconds[1]).toString(2).split('').reverse();
	secondsUnitBinary.forEach((bit, i) => {
		if (bit > 0) return secondsUnitBinaryHTML.children[i].classList.add('active');
	});
}
