import { ReactNode, createContext, useState, useMemo, useContext, memo } from "react";

type Post = {
  user: string;
  postImage: string;
  likes: number;
  timestamp: string;
};

type postContextType = {
  postData: Post,
  dispatch?: (postData: Post) => void;
};


export const postContext = createContext({
  postData: {user: 'Stella', postImage: 'https://randomuser.me/api/portraits/women/12.jpg',likes: 10, timestamp: '2006-02-20T06:47:24.968Z'} as Post,
});

function PostProvider({children}: {children: ReactNode}){
  const [postData, setPostData] = useState<Post>(
    {user: 'Stella', postImage: 'https://randomuser.me/api/portraits/women/12.jpg',likes: 10, timestamp: '2006-02-20T06:47:24.968Z'}
  );
  const contextData: postContextType = useMemo(() => ({
    postData,
    dispatch: (value) => {
      console.log("called dispatch of post provider, value:", value);
      setPostData(value);
      console.log('postDate:',postData);
    },
  }), [postData,setPostData]);


  return (
    <postContext.Provider value={contextData}>
      {children}
    </postContext.Provider>
  );
}

export default memo(PostProvider);

export const usePostContext = (): postContextType => {
  const context = useContext(postContext);
  if (context === undefined) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};
