interface Article {
    title: string;
  }
  interface Article {
    imgSrc?: string;
    content: string;
  }
  // function that recieves an array of articles, that filters all the articles that are short to read and has an imgSrc
  // short article - content<=350 chars

  function filterShortImg(articles: Article[]) : Article[] {
    
    let filtered = articles.filter((article: Article): boolean => 
       article.content.length <= 350 && !!!article.imgSrc
    )
    return filtered;
  }

  const myArticles = [{title: 'noImage', content: 'jfdglafdadahzbjvzbhvh jjcjhjchdaadjhcjdadahcjsacachj bjcjlklklbcjcb'}, {title: 'mytitle', imgSrc: 'srcToImg', content: 'jfdglafdadahzbjvzbhvh jjcjhjchdaadjhcjdadahcjsacachj bjcjlklklbcjcb'}];
  
  filterShortImg(myArticles);