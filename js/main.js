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
