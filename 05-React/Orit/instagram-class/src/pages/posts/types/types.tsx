export interface PostImage {
  imageUrl: string;
  description: string;
}

export interface User {
  login: {
    username: string;
  };
  picture: {
    thumbnail: string;
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
  registered: {
    date: string;
  };
}
