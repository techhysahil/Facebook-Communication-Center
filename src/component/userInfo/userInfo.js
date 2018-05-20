import React from "react";
import { Link } from "react-router-dom";

import "./userInfo.css";

const UserProfile = ({user}) => {
	return (
		<div className="user-profile-info">
			<div className="thumbnail">
				<img src={user.thumnailUrl ? user.thumnailUrl : "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100" } />
			</div>
			<div className="user-info">
				<div className="user-name">{user.name}</div>
				<div className="post-email">{user.email}</div>
			</div>
		</div>
	);
};

export default UserProfile;
