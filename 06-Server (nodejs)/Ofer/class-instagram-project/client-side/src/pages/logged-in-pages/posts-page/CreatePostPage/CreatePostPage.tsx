import { ChangeEvent, ReactNode, memo, useState } from "react";
import axios from "axios";
import CreatePostInput from "./components/CreatePostInput";
import "./CreatePostPage.css";

function uuidv4() {
	return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
		(
			+c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
		).toString(16)
	);
}

function CreatePostPage(): ReactNode {
	const [file, setFile] = useState<string>();
	const [form, setForm] = useState({
		id: uuidv4(),
		userId: '',
		created_date: new Date(),
		title: '',
		description: '',
		location: '',
		imgUrl: '',
	  });

	function handleChange(e: React.SyntheticEvent<HTMLInputElement>) {
		if (e.target) {
			console.log(e.target.files);
			setFile(URL.createObjectURL(e.target.files[0]));
		}
	}

	function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>	) {
		event.preventDefault()
	}
	return (
		<>
			<div className="CreatePostPage-mainContainer">
				<form onSubmit={handleSubmit} className="CreatePostPage-form">
					<h1>Create a new post</h1>

					<CreatePostInput
						type={"text"}
						text={"title:"}
						id={"CreatePost-title"}
						htmlFor={"CreatePost-title"}
						setValueState={""}


					/>
					<CreatePostInput
						type={"text"}
						text={"description:"}
						id={"CreatePost-description"}
						htmlFor={"CreatePost-description"}
					/>

					<label htmlFor="CreatePost-title">upload Image:</label>
					<input id="CreatePost-img" type="file" onChange={handleChange} />
					<img className="CreatePost-image-view" src={file} />

					<input type="submit" value={"Submit"}/>
				</form>
			</div>
		</>
	);
}

export default memo(CreatePostPage);

// id: { type: String },
// userId: { type: String },
// created_date: { type: Date },
// title: { type: String },
// description: { type: String },
// imgUrl: { type: String },
// location: { type: String },
