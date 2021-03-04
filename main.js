import mobileMenu from "./mobileMenu.js";
mobileMenu();

// main.js scripts

const siteInputs = document.querySelectorAll("input");
const siteTextareas = document.querySelectorAll("textarea");
const btnSubmit = document.querySelector(".btn--submit");

const btnShowMoreArticles = document.querySelector(".btn--show-more-articles");
const btnShowMoreBlogs = document.querySelector(".btn--show-more-blogs");
const loader = document.querySelector(".loader-default");

// const filterBtn = document.querySelector(".btn__filter-btn");
// const articleCards = document.querySelectorAll(".article-card");
// show/hide article cards based on selected option with data-attributes

// filterBtn.addEventListener("change", function (e) {
//     articleCards.forEach((elements) => {
//         const journeyArticleCards = elements.dataset.tag === "journey";
//         const cityArticleCards = elements.dataset.city;
//         const booksArticleCards = elements.dataset.books;
//         const photosArticleCards = elements.dataset.photos;
//         const receiptsArticleCards = elements.dataset.receipts;

//         if (e.target.value === "" || e.target.value === "all articles") {
//             elements.classList.add("d-flex");
//         } else if (e.target.value === journeyArticleCards) {
//             journeyArticleCards.classList.add("d-none");
//         } else if (e.target.value === cityArticleCards) {
//             cityArticleCards.classList.add("d-none");
//         } else if (e.target.value === booksArticleCards) {
//             booksArticleCards.classList.add("d-none");
//         } else if (e.target.value === photosArticleCards) {
//             photosArticleCards.classList.add("d-none");
//         } else if (e.target.value === receiptsArticleCards) {
//             receiptsArticleCards.classList.add("d-none");
//         }
//     });
// });

// simple input scripts validation
siteInputs.forEach((element) => {
    element.addEventListener("input", () => {
        if (element.value.length < 10 || element.value.length > 200) {
            element.classList.add("error");
            btnSubmit.disabled = true;
        } else {
            element.classList.remove("error");
            btnSubmit.disabled = false;
        }
    });
});

siteTextareas.forEach((element) => {
    element.addEventListener("input", () => {
        if (element.value.length < 10 || element.value.length > 200) {
            element.classList.add("error");
            btnSubmit.disabled = true;
        } else {
            element.classList.remove("error");
            btnSubmit.disabled = false;
        }
    });
});

// ajax scripts for articles, blogs
function loadMoreArticles() {
    fetch("articleCards.html", {
        method: "GET",
    })
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            // Convert the HTML string into a document object
            // DOMParser() is native method
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");

            const articleDoc = doc.querySelector(".row--articles");

            btnShowMoreArticles.disabled = true;
            loader.classList.add("is-active");

            setTimeout(() => {
                loader.classList.remove("is-active");
                btnShowMoreArticles.disabled = false;
                btnShowMoreArticles.parentNode.insertBefore(
                    articleDoc,
                    btnShowMoreArticles
                );
            }, 1000);
        })
        .catch((error) => {
            error = alert("error!");
            loader.classList.remove("is-active");
            btnShowMoreArticles.disabled = false;
        });
}

function loadMoreBlogs() {
    fetch("blogCards.html", {
        method: "GET",
    })
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            // Convert the HTML string into a document object
            // DOMParser() is native method
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");

            const blogDoc = doc.querySelector(".row--portfolio-cards");

            btnShowMoreBlogs.disabled = true;
            loader.classList.add("is-active");

            setTimeout(() => {
                loader.classList.remove("is-active");
                btnShowMoreBlogs.disabled = false;
                btnShowMoreBlogs.parentNode.insertBefore(
                    blogDoc,
                    btnShowMoreBlogs
                );
            }, 1000);
        })
        .catch((error) => {
            error = alert("error!");
            loader.classList.remove("is-active");
            btnShowMoreBlogs.disabled = false;
        });
}

btnShowMoreArticles.addEventListener("click", loadMoreArticles);
btnShowMoreBlogs.addEventListener("click", loadMoreBlogs);
