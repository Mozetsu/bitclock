export function enableDarkMode(themeBtn = document.querySelector('.themeBtn')) {
	document.body.classList.remove('light');
	document.body.classList.add('dark');
	themeBtn.classList.remove(themeBtn.classList[3]);
	themeBtn.classList.add('fa-sun');
	localStorage.setItem('darkMode', 'enabled');
}

export function disableDarkMode(themeBtn = document.querySelector('.themeBtn')) {
	document.body.classList.remove('dark');
	document.body.classList.add('light');
	themeBtn.classList.remove(themeBtn.classList[3]);
	themeBtn.classList.add('fa-moon');
	localStorage.setItem('darkMode', null);
}

export function setSmoothTransition(elem = document.querySelector('body')) {
	const ms = 0.3;

	elem.style.transition = `background-color ${ms}s linear`;
	elem.querySelector('.page-title').style.transition = `background-color ${ms}s linear`;
	elem.querySelectorAll('.pseudo-square').forEach((sqr) => (sqr.style.transition = `background-color ${ms}s linear`));
	elem.querySelectorAll('.pseudo-dot').forEach((dot) => (dot.style.transition = `background-color ${ms}s linear`));
	elem.querySelectorAll('.binary-cell').forEach((cell) => (cell.style.transition = `background-color ${ms}s linear`));
}
