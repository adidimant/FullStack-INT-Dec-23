"use strict";
// function that recieves an array of articles, that filters all the articles that are short to read and has an imgSrc
// short article - content<=350 chars
function smallartical(articles) {
    return articles.filter((article) => {
        const shortarticle = article.content.length <= 350;
        if (shortarticle && article.imgSrc) {
            return true;
        }
    });
}
