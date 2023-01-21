/* Start Skills Section */
let skillsSection = document.querySelector("section.skills");
let skills = document.querySelectorAll(".skill-progress");

window.onscroll = function () {
	skills.forEach((skill) => {
		if (
			this.scrollY >= skillsSection.offsetTop - 250 &&
			skill.style.width === "0px"
		) {
			skill.style.width = skill.dataset.progress;
		}
	});
};
/* End Skills Section */
/* Start Events Section */
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
		countUnits[i].innerHTML = countDown[i].toFixed(0);
	}
	if (difference <= 0) {
		clearInterval(eventCounter);
		for (let i = 0; i < countUnits.length; i++) {
			countUnits[i].innerHTML = 0;
		}
	}
}, 1000);
/* End Events Section */
