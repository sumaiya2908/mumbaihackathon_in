const countDownClock = (number = 100, format = 'minutes') => {

	const d = document;
	const daysElement = d.querySelector('.days');
	const hoursElement = d.querySelector('.hours');
	const minutesElement = d.querySelector('.minutes');
	let countdown;
	convertFormat(format);


	function convertFormat(format) {
		switch (format) {
			case 'minutes':
				return timer(number);
			case 'hours':
				return timer(number * 60);
			case 'days':
				return timer(number * 60 * 24);
		}
	}

	function timer(minutesLeft) {

		countdown = setInterval(() => {

			if (minutesLeft <= 0) {
				clearInterval(countdown);
				return;
			};

			displayTimeLeft(minutesLeft);

		}, 1000);
	}

	function displayTimeLeft(minutes) {
		daysElement.textContent = Math.floor(minutes / (24*60));
		hoursElement.textContent = Math.floor((minutes) % (24*60) / 60);
		minutesElement.textContent = Math.floor(minutes % (24*60) % 60);
	}
}


/*
  start countdown
  enter number and format
  days, hours, minutes or seconds
*/
let now = new Date();
let endDate = new Date('04/12/2022');
var diffMins = Math.round((endDate - now) / 60000);
countDownClock(diffMins, 'minutes');