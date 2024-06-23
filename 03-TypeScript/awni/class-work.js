"use strict";
// function that recieves an array of articles, that filters all the articles that are short to read and has an imgSrc
// short article - content<=350 chars
function filterArticles(articles) {
    return articles.filter((article) => article.content.length <= 350 && !!article.imgSrc);
}
const filterArticles1 = (articles) => articles.filter(article => article.content.length <= 350 && !!article.imgSrc);
class PT {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.biggerValue = x > y ? x : y;
    }
    // Gets another x, y. returns the distance between our current point to the gives point x,y
    calculateDistance(x, y) {
        const X = this.x - x;
        const Y = this.y - y;
        return Math.sqrt(X * X + Y * Y);
    }
}
// instances (מופעים) of the clas PT
const p1 = new PT(8, 4);
const p2 = new PT(50, 70);
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const person1 = new Person(1, "Awni");
