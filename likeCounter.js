function likeCounter () {
    const likeCount = document.querySelector('.like-count');
    const likeBtn = document.querySelector('.social-media__like-btn');

    likeBtn.addEventListener('click', function () {
        if (this.classList.contains('social-media__like-btn--liked')) {
            likeCount.textContent--;
        } else {
            likeCount.textContent++;
        }
    
        this.classList.toggle('social-media__like-btn--liked');
    })
}

export default likeCounter;
