import React from "react";
import { connect } from "react-redux";
import Post from '../component/post';
import UserProfile from '../component/userInfo';
import AddPost from '../component/addPost';


let currentuser = null;

class userTimeLine extends React.Component{
	render(){
		return(
			<div className="user-timeline">
				<UserProfile user={this.props.user} />
				<AddPost />
				<Post user={this.props.user} userPost={this.props.userPost} />
			</div>
		)
	}
}


function getCurrentUserData(userData, userId){
	let userInfo =  userData.filter((user) => {
		if(user.userId === userId){
			return user;
		}
	})[0]
	//Remove this later on
	currentuser = userInfo;
	return userInfo
}

function getPostList(postList, postArr, state){
	return postList.filter((post) => {
		if(postArr.includes(post.postId)){
			post.comments = getCommenttimelineData(state,post.commentTimelineId);
			return post;
		}
	})
}

function getCommenttimelineData(state,commentTimelineId){
	let commentsIdArray = state.commentsTimeline[commentTimelineId].commentsIdList;
	return commentsIdArray.map((commentId) => {
		// Get post Detail
		let post = state.comments[commentId];

		// Get user detail
		let userdetail = state.user.filter((user) => {
		 	if(user.userId === post.userId){
		 		return user;
		 	}
		})
		post.user = userdetail[0];

		// Get replies Detail
		post.replies = post.repliesId.map((replyId) => {
			let reply = state.comments[replyId];
			let userdetail = state.user.filter((user) => {
			 	if(user.userId === reply.userId){
			 		return user;
			 	}
			})
			reply.user = userdetail[0];
			return reply;
		})

		return post;
	})
}

const mapStateToProps = state => ({
	user: getCurrentUserData(state.user, 15656),
	userPost: getPostList(state.postList,currentuser.postIdList, state),
	store : state
});

const mapDispatchToProps = dispatch => ({
	// currentDirectoryNode: nodes => dispatch(updatecurrentDirectoryNode(nodes))
});

export default connect(mapStateToProps, mapDispatchToProps)(userTimeLine);
