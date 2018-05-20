import React from "react";
import { Link } from "react-router-dom";

import Comments from '../comments';

import "./post.css";

const Post = ({user,userPost}) => {
	return (
		<div className="post-list">
			{
				userPost.map((post,index) => {
					return(
						<div key={index} className="post-item">
							<div className="header">
								<div className="thumbnail">
									<img src={user.thumnailUrl ? user.thumnailUrl : "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100" } />
								</div>
								<div className="user-info">
									<div className="user-name">{user.name}</div>
									<div className="post-time">{post.time}</div>
								</div>
							</div>

							<div className="post-text">
								{post.text}
							</div>
							<div className="stats-detail">
								<span className="likes">
									<span>Likes </span>
									{post.likes}
								</span>
								<span className="comments">
									<span>Comments </span>
									{post.commentsCount}
								</span>
							</div>
							
							<Comments commentList={post.comments} />
						</div>
					)
				})
			}
		</div>
	);
};

export default Post;
