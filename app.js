import { changeTheme, setSmoothTransition } from './js/interface.js';
import { Clock } from './js/clock.js';

const Bitclock = new Clock();
Bitclock.update(); // imediately update clock on page load

const bodyHTML = document.querySelector('body');
const themeBtn = document.querySelector('.themeBtn');
themeBtn.addEventListener('click', () => changeTheme(bodyHTML));

window.onload = () => setSmoothTransition(bodyHTML); // set smooth theme transition after page is loadaded

setInterval(() => Bitclock.update(), 200); // update clock every second
