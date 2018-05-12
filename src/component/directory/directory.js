import React from 'react';
import { Link } from "react-router-dom";

import AddDirectory from '../../container/AddDirectory';
import BreadCrumb from '../../container/BreadCrumb';
import './directory.css';



const DirectoryTree = ({directoryData,match}) => {
	let data,
		isPathMatched = false;

	if(match.params.paramId){
		directoryData.forEach((item) => {
			if(item.name === match.params.paramId){
				isPathMatched = true;
				data = item.nested;
			}
		})
	}else{
		isPathMatched = true;
		data = directoryData;
	}


	return(
		<div className="directory-wrapper">
		{	

			isPathMatched && data != null &&  (data.map((directory,index) => {
				return (
					 <Link className="directory"  key={index} to={`${match.url}${directory.name}`}>
					 	<img className="directory-icon" src="Folder-icon.png" alt="" />
						<div className="title">{directory.name}</div>
					 </Link>
				)
			}))
		}

		<hr />
		<BreadCrumb />
		<AddDirectory />
	</div>)
}

export default DirectoryTree