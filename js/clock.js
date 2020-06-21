export class Clock {
	constructor(elem = document.querySelector('body')) {
		this.time = {
			Hours: [],
			Minutes: [],
			Seconds: [],
		};

		this.bits = {
			Hours: [],
			Minutes: [],
			Seconds: [],
		};

		for (const unit in this.time) {
			for (let i = 0; i < 2; i++) {
				this.time[unit][i] = elem.querySelector(`.${unit}`).children[i]; // HTML time
				this.bits[unit][i] = elem.querySelector(`.bits-${unit}`).children[i]; // HTML binary cells
			}
		}
	}

	initialize() {
		this.globalTime = new Date();
		this.timeUnit = {};

		for (const unit in this.time) {
			const tmp = `get${unit}`;
			// Get seconds --------------------------
			this.timeUnit[unit] = this.globalTime[tmp]().toString().split('');
			if (this.timeUnit[unit].length === 1) this.timeUnit[unit].unshift(0);
		}
	}

	update() {
		this.initialize();
		for (const unit in this.timeUnit) {
			for (let n = 0; n < this.timeUnit[unit].length; n++) {
				// Update HMTL hour ------------------------------------
				this.time[unit][n].innerHTML = this.timeUnit[unit][n];
				// Update HMTL binary cells ------------------------------------
				const arr = this.decimalToBinary(parseInt(this.timeUnit[unit][n]));
				arr.forEach((bit, i) => {
					if (bit > 0) return this.bits[unit][n].children[i].classList.add('active');
					this.bits[unit][n].children[i].classList.remove('active');
				});
			}
		}
	}

	decimalToBinary(n) {
		const arr = (n >>> 0).toString(2).split('');
		for (let i = 4 - arr.length; i > 0; i--) arr.unshift(0);
		return arr;
	}
}
