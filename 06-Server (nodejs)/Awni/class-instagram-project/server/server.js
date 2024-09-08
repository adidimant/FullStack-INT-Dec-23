import express from 'express';
import axios from 'axios';
import cors from 'cors';
import { process } from 'node';
import { useEffect } from 'react';


/**
 1) Create a new server for the instagram project
2) Create a new endpoint - GET /posts
3) Migrate the api calls for the posts data to be received from the server
it means that the client side (react) will request for the posts from our server
the server will recieve the request, then will create a request for the posts API
then will response the results to the client (react)
 */

const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS to allow React frontend to access the server
app.use(cors());

// 1) Create a new server for the Instagram project
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// 2) Create a new endpoint - GET /posts
app.get('/posts', async (req, res) => {
    try {
        // Define the Instagram API endpoint and access token (replace with actual token)
        const INSTAGRAM_API_URL = 'https://api.instagram.com/v1/users/self/media/recent';
        const ACCESS_TOKEN = 'your_instagram_access_token';

        // Make a request to Instagram API
        const response = await axios.get(`${INSTAGRAM_API_URL}`, {
            params: {
                access_token: ACCESS_TOKEN,
            },
        });

        // 3) Send the posts data to the client
        const posts = response.data.data;  
        res.json(posts);

    } catch (error) {
        console.error('Error retrieving posts:', error);
        res.status(500).json({ message: 'Error retrieving posts' });
    }
});

function setPosts() {
    throw new Error('Function not implemented.');
}

function MyComponent() {
    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(data => setPosts(data)) // Assuming you have a `setPosts` function
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return null; // Replace with your component's JSX
}

export default MyComponent;

