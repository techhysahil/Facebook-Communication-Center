// Directory Actions
export const moveInside = state => ({
	type : "MOVE_INSIDE"
})

export const moveOutside = state => ({
	type : "GO_OUTSIDE"
})

export const addNewDirectory = text => ({
	type : "ADD_DIRECTORY",
	name : text
})

export const updatecurrentDirectory = dirName => ({
	type : "UPDATE_CURRENT_DIRECTORY",
	name : dirName
})

export const updatecurrentDirectoryNode = nodes => ({
	type : "UPDATE_CURRENT_DIRECTORY_NODE",
	name : nodes
})
