// function - show/hide article cards with data-attributes based on selected option 

function showHideArticleCards() {
    const filterBtn = document.querySelector(".btn__filter-btn");
    const articleCards = document.querySelectorAll(".article-card");

filterBtn.addEventListener("change", function (e) {

    for (const elements of articleCards) {
        const targetArticleCards = document.querySelector(`.article-card[data-${e.target.value}]`);

        if (e.target.value === "" || e.target.value === "articles") {
            elements.classList.remove("d-none");
            elements.classList.add("d-flex");
        } else {
            elements.classList.remove("d-flex");
            elements.classList.add("d-none");
            targetArticleCards.classList.add("d-flex");
        }
    }
});
}

export default showHideArticleCards;



