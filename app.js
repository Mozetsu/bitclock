const bodyHTML = document.querySelector('body');
const themeBtn = document.querySelector('.fa-sun');
themeBtn.addEventListener('click', () => changeTheme(bodyHTML));

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
