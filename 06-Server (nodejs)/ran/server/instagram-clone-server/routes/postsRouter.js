const express = require('express');
const postsRouter = express.Router();

// GET /posts - Retrieve all posts
postsRouter.get('/', (req, res) => {
    const { page, limit, authorId } = req.query;
    res.json({ message: 'Retrieve all posts', page, limit, authorId });
});

// GET /posts/:id - Retrieve a single post by ID
postsRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: 'Retrieve a single post by ID', postId: id });
});

// POST /posts - Create a new post
postsRouter.post('/', (req, res) => {
    const { title, content, authorId } = req.body;
    res.json({ message: 'Create a new post', title, content, authorId });
});

// PUT /posts/:id - Update an existing post by ID
postsRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    res.json({ message: 'Update a post by ID', postId: id, title, content });
});

// DELETE /posts/:id - Delete a post by ID
postsRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: 'Delete a post by ID', postId: id });
});

module.exports = postsRouter;