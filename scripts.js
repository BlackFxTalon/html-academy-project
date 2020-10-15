// site scripts
const hambBtn = document.querySelector('.hamb-btn');
const closeBtn = document.querySelector('.close-btn');
const likeBtn = document.querySelector('.social-media__like-btn');

hambBtn.addEventListener('click', function () {
    this.classList.add('hamb-btn--opened');
})

closeBtn.addEventListener('click', function () {
    hambBtn.classList.remove('hamb-btn--opened');
})

likeBtn.addEventListener('click', function () {
    this.classList.toggle('social-media__like-btn--liked');
})