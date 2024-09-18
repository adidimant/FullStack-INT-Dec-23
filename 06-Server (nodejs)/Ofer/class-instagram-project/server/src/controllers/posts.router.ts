import express from "express";
import axios from "axios";
import { User, Post } from "../classes/postsClasses";
const postsRouter = express.Router();

const postDB: Post[] = [];

postsRouter.get("/", async (req, res) => {
	console.log(
		`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${
			req.url
		}. headers: ${JSON.stringify(req.headers)}`
	);
	const { results } = req.query;
	if (results && Number(results) > 100) {
		res.status(400).send("`results` query param must be up to 100.");
		return;
	}
	try {
		const response = await axios.get(
			"https://randomuser.me/api/?results=" + results
		); // Fetch posts from the API.
		const data = response.data;
		res.json(data.results);
	} catch (err) {
		console.error("Error fetching data:", err);
		res.status(500).json({ error: "Failed to fetch posts" });
	}
});

postsRouter.put("/createPost", (req, res) => {
	const { userName, img, caption } = req.query;
	if (userName && img && caption && String(userName).length > 4) {
		const post = new Post(String(userName), String(img), String(caption));
		postDB.push(post);
		res
			.status(201)
			.send(`Post by user ${userName} has been successfully created`);
	} else {
		res
			.status(406)
			.send(
				`There is an error for creating this post, please fill all the required fields and try again`
			);
	}
});

postsRouter.post("/updatePost", (req, res) => {
	const { userName, caption, img } = req.query;
	if (userName && caption && img) {
		const postIndex = postDB.findIndex((post) => post.userName === userName);
		if (postIndex > -1) {
			postDB[postIndex].userName = String(userName);
			postDB[postIndex].caption = String(caption);
			postDB[postIndex].img = String(img);
			res
				.status(201)
				.send(`Post by user ${userName} has been successfully updated`);
		} else {
			res.status(406).send(`cannot find user to update the post to`);
		}
	} else {
		res
			.status(406)
			.send(
				`There is an error for updating this post, please fill all the required fields and try again`
			);
	}
});

export default postsRouter;
