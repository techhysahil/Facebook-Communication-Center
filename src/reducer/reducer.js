// let initDirState = {
// 		DirectoryMap :{
// 			root :{
// 				name : "root",
// 				nested : ["Project_1"]
// 			},
// 			Project_1 : {
// 				name : "Project_1",
// 				nested : ["Project_2","Project_3"]
// 			},
// 			Project_2 : {
// 				name : "Project_2",
// 				nested : ["Project_21","Project_22","Project_23"]
// 			},
// 			Project_21 : {
// 				name : "Project_21",
// 				nested : null
// 			},
// 			Project_22 : {
// 				name : "Project_22",
// 				nested : null
// 			},
// 			Project_23 : {
// 				name : "Project_23",
// 				nested : null
// 			},
// 			Project_3 : {
// 				name : "Project_3",
// 				nested : ["Project_31"]
// 			},
// 			Project_31 : {
// 				name : "Project_31",
// 				nested : null
// 			}	
// 		},
// 		currentDirectoryNode : ["Project_1"],
// 		currentDirectory : 'root'
// 	}

let initDirState = {
		DirectoryMap :{
			root :{
				name : "root",
				nested : null
			}	
		},
		currentDirectoryNode : null,
		currentDirectory : 'root'
	}

export function directory(state=initDirState,action){
	switch(action.type){
		case "ALL":
			return state;
		case "ADD_DIRECTORY":
			let clone = JSON.parse(JSON.stringify(state));
			clone.currentDirectoryNode = clone.currentDirectoryNode ? clone.currentDirectoryNode.concat(action.name) : [action.name];
			clone.DirectoryMap[state.currentDirectory].nested = clone.DirectoryMap[state.currentDirectory].nested ? clone.DirectoryMap[state.currentDirectory].nested.concat(action.name) : [action.name]
			clone.DirectoryMap[action.name] = {
				name : action.name,
				nested : null
			}
			return clone;
		case "UPDATE_CURRENT_DIRECTORY":
			return {...state,currentDirectory : action.name}
		case "UPDATE_CURRENT_DIRECTORY_NODE":
			return {...state,currentDirectoryNode : action.name}
		default:
			return state;
	}
}
