import { memo, useCallback, useEffect, useState } from "react";
import Post from "../Post/Post";
import { RandomPostApiResult } from "../../../types";
import PostModal from "../PostModal/PostModal";
import "./PostsContainer.css";

function PostsContainer() {
	const [posts, setPosts] = useState<RandomPostApiResult[]>([]); // setPosts is a function that updates the posts state variable with the new value passed to it as an argument (in this case, an array of posts) and triggers a re-render of the component.
	const [modal, setModal] = useState<boolean>(false);


	const toggleModal = () =>{
		setModal(!modal);
	}
	const controller = new AbortController();

	const loadMorePosts = useCallback(
		async (amount: number) => {
			try {
				const response = await fetch("http://localhost:3000/posts?results=" + amount,{ signal: controller.signal });
				setTimeout(() => {
					controller.abort();
				}, 2000);

				if (controller.signal.aborted) {
					throw new Error(`Response status: ${response.status}`);
				}
				const data = await response.json();
				console.log(data);
				setPosts([...posts, ...data.results]); // Update the posts state variable with the fetched posts.
				return data;
			} catch (error) {
				console.error((error as Error).message);
			}
		},
		[posts]
	);

	useEffect(() => {
		// useEffect is a hook that runs a function when the component mounts and whenever the dependencies array changes.
		if (posts.length < 50) {
			// critical for avoiding endless re-renders!
			loadMorePosts(2);
		}
	}, [posts]);

	const handleRefresh = useCallback(() => {
		// Handle refresh button click.
		setPosts([]);
	}, []);

	return (
		<div className="postpage-container">
			<PostModal
			user={posts[0].name.first}
			postImage={posts[0].picture.large}
			likes={ 10}
			timestamp={String(Date.now())}
			/>
			<button className="postpage-btn" onClick={handleRefresh}>
				Refresh
			</button>
			{posts.map((post: RandomPostApiResult, index: number) => (
				<Post

					user={post.name.first}
					postImage={post.picture.large}
					likes={index * 10}
					timestamp={post.registered.date}

				/>
			))}
		</div>
	);
}

export default memo(PostsContainer);
