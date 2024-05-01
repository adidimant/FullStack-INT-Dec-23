// types concatination:
type Animal = {
  name: string;
  countries: string[];
  sleepingHoursAmount: number;
  nickname: string;
  ownerType: 'private' | 'school' | 'zoo' | 'military' | 'lab';
  ownerName: string;
}

type Bear = Animal & { 
  honey: boolean;
}

type Snake = Animal & { 
  rats: string[];
}

const bear: Bear = getBear();
bear.name;
bear.honey;
bear.ownerType = 'private';

type Paper = {
  title: string;
}

// can't add fields to a type (but to interface yes)
type Paper = {
  imgSrc?: string;
  content: string;
}


// interfaces and interfaces extends:

interface AnimalV2 {
  name: string;
}

interface BearV2 extends AnimalV2 {
  honey: boolean;
}

interface Dog extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;

// adding new field to previous interface - it's possible

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
  return articles.filter((article: Article): boolean => {
    const artShort = article.content.length <= 350;
    const hasImage = !!article.imgSrc;
    return artShort && hasImage;
  });
}

// or in short:
const filterArticles2 = (articles: Article[]): Article[] => 
  articles.filter((article: Article): boolean => article.content.length <= 350 && !!article.imgSrc
);

// Create a type by removing specific fields from another type - using Omit

type ArticleWithoutImage = Omit<Article, 'imgSrc'>;
let articleImageless: ArticleWithoutImage | {} = {};
(articleImageless as ArticleWithoutImage).content = 'Very rich content';
(articleImageless as ArticleWithoutImage).title = 'The best article in town';


