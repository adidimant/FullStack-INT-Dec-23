interface Article {
    title: string;
}
interface Article {
    imgSrc?: string;
    content: string;
}
// function that recieves an array of articles, that filters all the articles that are short to read and has an imgSrc
// short article - content<=350 chars



function filterArticles(articles: Article[]): Article[] {
    return articles.filter((article: Article): boolean => article.content.length <= 350 && !!article.imgSrc);
}

const filterArticles1 = (articles: Article[]): Article[] => articles.filter(article => article.content.length <= 350 && !!article.imgSrc);


class PT {
    private x: number;
    private y: number;
    private biggerValue: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.biggerValue = x > y ? x : y;
    }


    // Gets another x, y. returns the distance between our current point to the gives point x,y
    calculateDistance(x: number, y: number): number {
        const X = this.x - x;
        const Y = this.y - y;
        return Math.sqrt(X * X + Y * Y);
    }
}
// instances (מופעים) of the clas PT
const p1 = new PT(8, 4);
const p2 = new PT(50, 70);



interface PersonInterface {
    id:number,
    name:string,
    register():string
}



class Person implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    register(): string {
        return `${this.name} is now registered`
    }
}

const person1 = new Person(1, "Awni");





