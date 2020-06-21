import { changeTheme, setSmoothTransition } from './js/interface.js';
import { Clock } from './js/clock.js';

const Bitclock = new Clock();
Bitclock.initialize();

const bodyHTML = document.querySelector('body');
const themeBtn = document.querySelector('.themeBtn');
themeBtn.addEventListener('click', () => changeTheme(bodyHTML));

Bitclock.update(); // imediately updates time on page load
setInterval(() => Bitclock.update(), 1000); // set interval of 1 sec to update time

window.onload = () => setSmoothTransition(bodyHTML); // set smooth theme transition after page is loadaded
