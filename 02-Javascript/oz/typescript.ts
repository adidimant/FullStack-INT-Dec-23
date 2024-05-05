
interface Article {
  title: string;
}
interface ArticleWithImg extends Article {
  imgSrc?: string;
  content: string;
}

function getShortArticleWithImg(articles: ArticleWithImg[]): ArticleWithImg[] {
    return articles.filter(article => article.content.length <= 350 && article.imgSrc);
}

