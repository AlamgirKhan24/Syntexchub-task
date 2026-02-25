// DOM
const openBtn = document.querySelector('.open-btn');
const signupForm = document.querySelector('.signupform');
const loginBtn = document.querySelector('#signup');
const loginForm = document.querySelector('.login');
const signUpBtn = document.querySelector('#login');

// EVENTLISTENR
openBtn.addEventListener('click', (e) => {
    signupForm.classList.add('active');

    document.body.style.overflow = 'hidden'

    openBtn.style.visibility = "hidden";

});

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('active');

    document.body.style.overflow = 'hidden';

    signupForm.classList.remove('active');
});

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();

    loginForm.classList.remove('active')

    signupForm.classList.add('active');

    document.body.style.overflow = 'hidden';

});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    alert("Your Account Created Successfully");


});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {

        if (loginForm.classList.contains('active')) {
            loginForm.classList.remove('active');
            openBtn.style.visibility = "visible";
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        } else if (signupForm.classList.contains('active')) {
            signupForm.classList.remove('active');
            openBtn.style.visibility = "visible";
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    }
});