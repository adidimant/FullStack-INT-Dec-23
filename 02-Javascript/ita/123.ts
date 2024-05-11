interface Article {
    title: string;
  }
  interface Article {
    imgSrc?: string;
    content: string;
  }
  // function that recieves an array of articles, that filters all the articles that are short to read and has an imgSrc
  // short article - content<=350 chars

  function smallartical (articles: Article[]) : Article[] {
    return articles.filter((article: Article)  => {
        const shortarticle = article.content.length <= 350;
        if (shortarticle && article.imgSrc) {
            return true;
        }
    })
  }