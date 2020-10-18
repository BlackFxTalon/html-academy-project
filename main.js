import mobileMenu from './mobileMenu.js';
// main.js scripts

const siteInputs = document.querySelectorAll('input');
const siteTextareas = document.querySelectorAll('textarea');
const btnSubmit = document.querySelector('.btn--submit');

siteInputs.forEach(element => {
    element.addEventListener('input', () => {
        if(element.value.length < 10 || element.value.length > 200) {
            element.classList.add('error');
            btnSubmit.disabled = true;
        } else {
            element.classList.remove('error');
            btnSubmit.disabled = false;
        }
    })
});

siteTextareas.forEach(element => {
    element.addEventListener('input', () => {
        if(element.value.length < 10 || element.value.length > 200) {
            element.classList.add('error');
            btnSubmit.disabled = true;
        } else {
            element.classList.remove('error');
            btnSubmit.disabled = false;
        }
    })
});

mobileMenu();


