import React from "react";
import { Link } from "react-router-dom";

import "./comments.css";

const Comments = ({commentList}) => {
	return (
		<div className="comments-wrapper">
			{
				commentList.map((commentThread) => {
					return(
						<div className="comment-thread">
							<div className="thumbnail">
								<img src={commentThread.user.thumnailUrl} />
							</div>
							<div className="comment-data">
								<span className="user-name">{commentThread.user.name}</span>
								<span className="comment-txt">{commentThread.text}</span>
								<div className="comment-stat">
									<span className="entity-name">Likes</span>
									<span>{commentThread.likes}</span>
									<span className="entity-name comment">Comments</span>
									<span>{commentThread.repliesId.length}</span>
								</div>
							</div>
							<div className="repliess-thread">
								{
									commentThread.replies.map((reply) => {
										return(
											<div className="comment-thread">
												<div className="thumbnail">
													<img src={reply.user.thumnailUrl} />
												</div>
												<div className="comment-data">
													<span className="user-name">{reply.user.name}</span>
													<span className="comment-txt">{reply.text}</span>
													<div className="comment-stat">
														<span className="entity-name">Likes</span>
														<span>{reply.likes}</span>
													</div>
												</div>
											</div>
										)
									})	
								}
							</div>
						</div>
					)
				})
			}
		</div>
	);
};

export default Comments;
