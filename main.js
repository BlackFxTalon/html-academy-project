import mobileMenu from "./mobileMenu.js";
import showHideArticleCards from "./showHideArticleCards.js";

mobileMenu();
showHideArticleCards();

// main.js scripts

const siteInputs = document.querySelectorAll("input");
const siteTextareas = document.querySelectorAll("textarea");
const btnSubmit = document.querySelector(".btn--submit");

const btnShowMoreArticles = document.querySelector(".btn--show-more-articles");
const btnShowMoreBlogs = document.querySelector(".btn--show-more-blogs");
const loader = document.querySelector(".loader-default");

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

// loadMoreArticles fetch function 
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
                showHideArticleCards();
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
