export function verifyTheme(elem) {
	const savedTheme = !localStorage.getItem('theme') ? 'light' : localStorage.getItem('theme');
	if (elem.classList[0] !== savedTheme) changeTheme(elem);
}

export function changeTheme(elem = document.querySelector('body')) {
	const currentTheme = elem.classList[0];
	const themeBtn = elem.querySelector('.themeBtn');
	const newTheme = currentTheme === 'light' ? 'dark' : 'light';
	const newThemeIcon = newTheme === 'light' ? 'fa-moon' : 'fa-sun';
	elem.classList.remove(currentTheme);
	elem.classList.add(newTheme);
	themeBtn.classList.remove(themeBtn.classList[3]);
	themeBtn.classList.add(newThemeIcon);
	localStorage.setItem('theme', newTheme);
}

export function setSmoothTransition(elem = document.querySelector('body')) {
	const ms = 0.3;

	elem.style.transition = `background-color ${ms}s linear`;

	elem.querySelector('.page-title').style.transition = `background-color ${ms}s linear`;

	elem.querySelectorAll('.pseudo-square').forEach((sqr) => (sqr.style.transition = `background-color ${ms}s linear`));

	elem.querySelectorAll('.binary-cell').forEach((cell) => (cell.style.transition = `background-color ${ms}s linear`));
}
