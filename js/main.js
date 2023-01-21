let skillsSection = document.querySelector("section.skills");
let skills = document.querySelectorAll(".skill-progress");

let statsSection = document.querySelector("section.stats");
let stats = document.querySelectorAll(".stat span:first-of-type");

window.onscroll = function () {
	if (this.scrollY >= skillsSection.offsetTop - 250) {
		skills.forEach((skill) => {
			if (skill.style.width === "0px") {
				skill.style.width = skill.dataset.progress;
			}
		});
	}

	if (window.scrollY >= statsSection.offsetTop - 250) {
		stats.forEach((stat) => {
			let numberCounter = setInterval(() => {
				if (parseInt(stat.innerHTML) < parseInt(stat.dataset.num)) {
					stat.innerHTML++;
				} else {
					clearInterval(numberCounter);
				}
			}, 5000 / stat.dataset.num);
		});
	}
};

let countUnits = document.querySelectorAll(".count .num");
let deadLine = new Date("21 January 2024 23:59:59");

let eventCounter = setInterval(() => {
	let now = new Date();
	let difference = deadLine - now;
	let countDown = [];
	let days = difference / (1000 * 60 * 60 * 24);
	let hours = (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
	let minutes = (difference % (1000 * 60 * 60)) / (1000 * 60);
	let seconds = (difference % (1000 * 60)) / 1000;
	countDown.unshift(days, hours, minutes, seconds);
	for (let i = 0; i < countUnits.length; i++) {
		countUnits[i].innerHTML = Math.floor(countDown[i]);
	}
	if (difference <= 0) {
		clearInterval(eventCounter);
		for (let i = 0; i < countUnits.length; i++) {
			countUnits[i].innerHTML = 0;
		}
	}
}, 1000);
