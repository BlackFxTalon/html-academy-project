// site scripts
const hambBtn = document.querySelector('.hamb-btn');
const closeBtn = document.querySelector('.close-btn');

hambBtn.addEventListener('click', function () {
    this.classList.add('hamb-btn--opened');
})

closeBtn.addEventListener('click', function () {
    hambBtn.classList.remove('hamb-btn--opened');
})