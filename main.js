// Media Slider

const bar = document.querySelector("#m-bar");
const nav = document.querySelector("#navbar");
const navClose = document.querySelector("#m-close");

bar.addEventListener("click", () => {
	nav.classList.add("active");
});

navClose.addEventListener("click", () => {
	nav.classList.remove("active");
});

// Login & Registration From

const loginContainer = document.querySelector("#login-container");
const loginBox = document.querySelector(".login-box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const navUser = document.querySelector("#nav-user");
const closeLoginRegistration = document.querySelector(".close-icon");

registerLink.addEventListener("click", () => {
	loginBox.classList.add("active");
});

loginLink.addEventListener("click", () => {
	loginBox.classList.remove("active");
});

navUser.addEventListener("click", () => {
	loginContainer.style.transform = "scale(1)";
	navUser.classList.add("active");
});

closeLoginRegistration.addEventListener("click", () => {
	loginContainer.style.transform = "scale(0)";
	navUser.classList.remove("active");
});
