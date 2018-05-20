let initUserState = [
	{
		userId : 15656,
		name : "Sahil Gupta",
		email : "sahil@gmail.com",
		thumnailUrl : "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
		postIdList : [5997787]
	}
];

export function user(state = initUserState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

let initCommentState = {
	5656567 : {	
		commentId : 565656,
		text : "The is the dummy timeline text",
		userId : 15656,
		likes : 10,
		repliesId : []
	},
	5667856 : {	
		commentId : 5667856,
		text : "The is the 2nd dummy timeline text",
		userId : 15656,
		likes : 1,
		repliesId : [12367856,2322856]
	},
	12367856 : {	
		commentId : 5667856,
		text : "The is the 2nd dummy timeline text",
		userId : 15656,
		likes : 1,
		repliesId : []
	},
	2322856 : {	
		commentId : 5667856,
		text : "The is the 2nd dummy timeline text",
		userId : 15656,
		likes : 1,
		repliesId : []
	}
};
export function comments(state = initCommentState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

let initCommentTimeLineState = {
	8976767 : {	
		commentTimeLineId : 8976767,
		commentsIdList : [5656567,5667856]
	}
};

export function commentsTimeline(state = initCommentTimeLineState, action) {
	switch (action.type) {
		default:
			return state;
	}
}


let postInitState = [
	{	
		postId : 5997787,
		userId : 15656,
		text : "this is user dummy posted content",
		time : "Sat May 19 2018 17:52:26",
		commentTimelineId : 8976767,
		likes : 12,
		commentsCount : 23
	}
];
export function postList(state = postInitState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
