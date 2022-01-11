const form = document.querySelector('.container .form');

form.addEventListener('submit', e => {
	e.preventDefault();

	const email = form['email'].value;
	
	if 	(!isValidEmail(email)) {
		addErrorTo('email', 'Please provide a valid email address');
	} else {
		removeErrorFrom('email');
	}
});

function addErrorTo(field, message) {
	const formControl = form[field].parentNode;
	formControl.classList.add('error');

	const msg = formControl.querySelector('.alert-msg');
	msg.innerText = message;
}

function removeErrorFrom(field) {
	const formControl = form[field].parentNode;
	formControl.classList.remove('error');
}

//regular expressions

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}


