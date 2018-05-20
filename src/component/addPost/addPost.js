import React from "react";
import { Link } from "react-router-dom";

import "./addPost.css";

const AddPost = ({}) => {
	return (
		<div className="add-post-wrapper">
			<textarea className="post-section" placeholder="What's in your mind..." value="" />
			<div className="update-post-btn btn">Update</div>
		</div>
	);
};

export default AddPost;
