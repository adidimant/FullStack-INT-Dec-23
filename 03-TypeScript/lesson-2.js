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
// create a function that accepts a generic object, which also must have another field called created_date, and returns true if the object has more than 6 keys
const isComplexObject = (obj) => {
    return Object.keys(obj).length > 5;
};
let articleImageless = {};
articleImageless.title = 'The best article in town';
articleImageless.content = 'Very rich content';
// Or:
articleImageless.content = 'Very rich content';
