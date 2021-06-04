const panels = document.querySelectorAll('.panel');
//because we using one parameter es6 allows me to remove brackets.
//- loop to add or remove class on click.
panels.forEach((panel) => {
	console.log('each panel', panel);
	panel.addEventListener('click', () => {
		removeActiveClasses();
		panel.classList.add('active');
	});
});

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
}
