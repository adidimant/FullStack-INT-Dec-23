import { createContext, useContext } from 'react';
import { Posts } from '../logged-in-pages/posts-page/components/Post-Info/PostInfo';


// useContext : useContext is a hook that returns the value of the context object provided by the nearest <MyContext.Provider> component in the component tree.
type PostsContextType = {
    posts: Posts[];
    setPosts: React.Dispatch<React.SetStateAction<Posts[]>>; // Define the type of the setPosts function 
};

export const PostsContext = createContext<PostsContextType | undefined>(undefined); // Create the context object with the type PostsContextType and set the default value to undefined 

export const usePostsContext = () => {
    const context = useContext(PostsContext); // Use the useContext hook to get the value of the context object 
    if (!context) {
        throw new Error('usePostsContext must be used within a PostsProvider');
    }
    return context;
};