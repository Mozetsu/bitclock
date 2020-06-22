import { changeTheme, setSmoothTransition } from './js/interface.js';
import { Clock } from './js/clock.js';

const Bitclock = new Clock();
Bitclock.update(); // imediately update clock on page load
setInterval(() => Bitclock.update(), 200); // update clock every 200ms

const bodyHTML = document.querySelector('body');
bodyHTML.onload = () => {
	// set smooth theme transition after body is loaded
	setTimeout(() => setSmoothTransition(bodyHTML), 1);
};

const themeBtn = document.querySelector('.themeBtn');
themeBtn.addEventListener('click', () => changeTheme(bodyHTML));
