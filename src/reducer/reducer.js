// directory Reducer
let initDirState = [
	{
		name : "Project1",
		nested : null
	},
	{
		name : "Projec2",
		nested : [
			{
				name : "Project_3",
				nested : null			
			},
			{
				name : "Project_4",
				nested : null			
			}
		]
	}
]
export function directory(state=initDirState,action){
	switch(action.text){
		case "ALL":
			return state;
		default:
			return state;
	}
}





// let initDirState = [
// 	{
// 		route : "/",
// 		directories : ["Project1"]
// 		nested : {
// 			route : "Project1",
// 			directories : ["Project2"]
// 			nested : null
// 		}
// 	}
// ]

// let mapping : {
// 		Project_1 : {
// 			name : "Project_1",
// 			nested : null
// 		},
// 		Project_2 : {
// 			name : "Project_2",
// 			nested : null
// 		}
		
// 	}
