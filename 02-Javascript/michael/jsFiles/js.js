"use strict";
function filterArticles(articles) {
    return articles.filter(article => {
        const artShort = article.content.length <= 350;
        const hasImage = !article.imgSrc;
        return artShort && hasImage;
    });
}
