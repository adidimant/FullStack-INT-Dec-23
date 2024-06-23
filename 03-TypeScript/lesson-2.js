"use strict";
const bear = getBear();
bear.name;
bear.honey;
bear.ownerType = 'private';
const bear = getBear();
bear.name;
bear.honey;
// function that recieves an array of articles, that filters all the articles that are short to read and has an imgSrc
// short article - content<=350 chars
function filterArticles(articles) {
    return articles.filter((article) => {
        const artShort = article.content.length <= 350;
        const hasImage = !!article.imgSrc;
        return artShort && hasImage;
    });
}
// or in short:
const filterArticles2 = (articles) => articles.filter((article) => article.content.length <= 350 && !!article.imgSrc);
let articleImageless = {};
articleImageless.title = 'The best article in town';
articleImageless.content = 'Very rich content';
// Or:
articleImageless.content = 'Very rich content';
