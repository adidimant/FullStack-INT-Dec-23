"use strict";
function getShortArticleWithImg(articles) {
    return articles.filter(article => article.content.length <= 350 && article.imgSrc);
}
