export class Post {
    private postID: string;
    public userName: string;
    public img: string;
    public caption: string;
    public comments: [User, string][]
    public NumOflikes: number;
    public userLiked: User[];

    constructor(userName: string, img: string, caption: string){
        this.userName = userName;
        this.NumOflikes = 0;
        this.userLiked = [];
        this.caption = '';
        this.comments = []
        this.img = '';
        this.postID = this.uuidv4()
    }

    private uuidv4() {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
          (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
      }
}

export class User {
    private userID: string;
    public userName: string
    public following: User[];
    public followers: User[];
    public posts: Post[];

    constructor(userName: string){
        this.userName = userName;
        this.following = [];
        this.followers = [];
        this.posts = [];
        this.userID = this.uuidv4();
    }

    private uuidv4() {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
          (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
      }
}
