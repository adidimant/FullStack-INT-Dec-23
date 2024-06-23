interface Article {
    title: string;
    imgSrc?: string;
    content: string;
  }
  
 
   
  function filterArticles(articles: Article[]): Article[] {
    return articles.filter(article => {
      const artShort = article.content.length <= 350;
      const hasImage = !article.imgSrc;
      return artShort && hasImage;
    });
  }