import random from './random.js';

function comments() {
const inputText = document.querySelector('.comments-form__input-text');
const inputEmail = document.querySelector('.comments-form__input-email');
const textarea = document.querySelector('.comments-form__textarea');
const commentInputs = document.querySelectorAll('.comments-form__input');
const commentsBtn = document.querySelector('.comments-form__btn');
const commentsContainer = document.querySelector('.people-comments');

// commentsForm scripts

function addCommentsElements () {
    const commentsBlock = document.createElement('div');
    commentsBlock.classList.add('people-comments__block');
    commentsContainer.append(commentsBlock);
    addCommentsRow(commentsBlock);
    addCommentsEmail(commentsBlock);
    addCommentsCommentary(commentsBlock);
}
function addCommentsRow (commentsBlock) {
    const commentsRow = document.createElement('div');
    commentsRow.classList.add('people-comments__row');
    commentsBlock.append(commentsRow);
    addCommentsAvatar(commentsRow);
    addCommentsName(commentsRow);
}

function addCommentsAvatar (commentsRow) {
    const commentsAvatar = document.createElement('div');
    commentsAvatar.classList.add('people-comments__avatar');
    addCommentsAvatarImg(commentsAvatar);
    commentsRow.append(commentsAvatar);
}

function addCommentsAvatarImg (commentsAvatar) {
    const commentsAvatarImg = document.createElement('img');
    commentsAvatarImg.src = `img/avatar-img-${random(3,1)}.jpg`
    commentsAvatarImg.alt = 'comments block avatar'
    commentsAvatarImg.width = 50;
    commentsAvatarImg.height = 50;
    commentsAvatar.append(commentsAvatarImg);
}

function addCommentsName (commentsRow) {
    const commentsNameBlock = document.createElement('div');
    commentsNameBlock.classList.add('people-comments__name');
    const commentsName = document.createElement('span');
    commentsName.textContent = inputText.value;
    commentsNameBlock.append(commentsName);
    commentsRow.append(commentsNameBlock);
}
function addCommentsEmail (commentsBlock) {
    const commentsEmail = document.createElement('p');
    commentsEmail.classList.add('people-comments__email');
    commentsEmail.textContent = inputEmail.value;
    commentsBlock.append(commentsEmail);
}
function addCommentsCommentary (commentsBlock) {
    const commentary = document.createElement('p');
    commentary.classList.add('people-comments__commentary');
    commentary.textContent = textarea.value;
    commentsBlock.append(commentary);
}

commentsBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addCommentsElements();
    commentInputs.forEach(item => item.value = '');
    textarea.value = '';
    inputText.focus();
  })
}

export default comments;