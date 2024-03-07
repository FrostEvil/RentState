const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const message = document.getElementById("message");
const submitBtn = document.querySelector(".form__btn");
const allErrors = document.querySelectorAll(".form__error");
const submitMessage = document.querySelector(".prompt");
const submitMessageCloseBtn = submitMessage.querySelector(".prompt__btn");

const inputArr = [fullName, email, phoneNumber, message];

let errorCount = 0;

const setError = function (el, message) {
	el.nextElementSibling.textContent = message;

	el.classList.add("form__error--border");
};

const setSuccess = function (el) {
	el.nextElementSibling.textContent = "";
	el.classList.remove("form__error--border");
};

const isValidEmail = function (email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const isValidPhoneNumber = function (phoneNumber) {
	const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$/;
	return re.test(Number(phoneNumber));
};

const checkErrors = function () {
	allErrors.forEach((error) => {
		if (error.textContent !== "") {
			errorCount++;
		}
	});
	console.log(errorCount);
};

const validateInputs = function (e) {
	e.preventDefault();

	const fullNameValue = fullName.value.trim();
	const emailValue = email.value.trim();
	const phoneNumberValue = phoneNumber.value.trim();
	const messageValue = message.value.trim();

	if (fullNameValue === "") {
		setError(fullName, "To pole nie może być puste!");
	} else if (fullNameValue.length < "6") {
		setError(fullName, "Niepoprawne dane");
	} else {
		setSuccess(fullName);
	}

	if (emailValue === "") {
		setError(email, "To pole nie może być puste!");
	} else if (!isValidEmail(emailValue)) {
		setError(email, "Niepoprawny email!");
	} else {
		setSuccess(email);
	}

	if (phoneNumberValue === "") {
		setError(phoneNumber, "To pole nie może być puste!");
	} else if (!isValidPhoneNumber(phoneNumberValue)) {
		setError(phoneNumber, "Niewłaściwy numer telefonu!");
	} else {
		setSuccess(phoneNumber);
	}

	if (messageValue === "") {
		setError(message, "To pole nie może być puste!");
	} else if (messageValue.length < "10") {
		setError(message, "Za krótka wiadomość!");
	} else setSuccess(message);

	checkErrors();

	if (errorCount === 0) {
		submitMessage.classList.add("prompt--visible");
	}
	errorCount = 0;
};

submitBtn.addEventListener("click", validateInputs);
document.addEventListener("keydown", function (e) {
	if (e.key === "Enter") {
		validateInputs(e);
	}
});

submitMessageCloseBtn.addEventListener("click", function (e) {
	e.preventDefault();

	submitMessage.classList.remove("prompt--visible");

	inputArr.forEach((input) => (input.value = ""));
});

