import { enableDarkMode, disableDarkMode, setSmoothTransition } from './js/interface.js';
import { Clock } from './js/clock.js';

let darkMode = localStorage.getItem('darkMode');

setTimeout(() => setSmoothTransition(), 100);

const Bitclock = new Clock();
Bitclock.update(); // imediately update clock on page load
setInterval(() => Bitclock.update(), 200); // update clock every 200ms

const themeBtn = document.querySelector('.themeBtn');
themeBtn.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	if (darkMode === 'enabled') return disableDarkMode();
	enableDarkMode();
});
