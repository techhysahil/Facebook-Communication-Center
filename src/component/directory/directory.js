import React from 'react';
import { Link } from "react-router-dom";

import AddDirectory from '../../container/AddDirectory';
import BreadCrumb from '../../container/BreadCrumb';
import Modal from '../modal';
import './directory.css';



const DirectoryTree = ({rootDirData,directoryMapping,match,history,updateCurrentDirectory,currentDirectoryNode}) => {
	let slash="";
	let currentDirectory;

	if(Object.keys(match.params).length === 1){
		slash="/";
		if(directoryMapping.hasOwnProperty(match.url.slice(match.url.lastIndexOf("/")+1))){
			rootDirData = directoryMapping[match.url.slice(1)]["nested"]
			currentDirectory = directoryMapping[match.url.slice(1)];
			updateCurrentDirectory(currentDirectory.name);
			currentDirectoryNode(rootDirData);	
		}else{
			updateCurrentDirectory("root");
			history.push('/');
		}
	}else if(Object.keys(match.params).length > 1){
		slash="/";
		if(directoryMapping.hasOwnProperty(match.url.slice(match.url.lastIndexOf("/")+1))){
			rootDirData = directoryMapping[match.url.slice(match.url.lastIndexOf("/")+1)]["nested"];
			currentDirectory = directoryMapping[match.url.slice(match.url.lastIndexOf("/")+1)];
			updateCurrentDirectory(currentDirectory.name);
			currentDirectoryNode(rootDirData);
		}else{
			updateCurrentDirectory("root");
			history.push('/');	
		}
	}else{
		slash="";
		rootDirData = directoryMapping["root"].nested;
		currentDirectory : 'root';
		updateCurrentDirectory("root");
	}

	let breadcrumbArray = ["/"];
	if(Object.keys(match.params).length > 0){
		Object.keys(match.params).map((item) => {
			breadcrumbArray.push(item);
		})
	}


	return(
		<div>
			<BreadCrumb data={breadcrumbArray} />
			<AddDirectory />

			<div className="directory-wrapper">
			{	
				rootDirData ? (rootDirData.map((directory,index) => {
					return (
						 <Link className="directory"  key={index} to={`${match.url}${slash}${directoryMapping[directory].name}`}>
						 	<img className="directory-icon" src={window.location.origin+"/Folder-icon.png"} alt="" />
							<div className="title">{directoryMapping[directory].name}</div>
						 </Link>
					)
				})) : ""
			}
		</div>	
	</div>)
}

export default DirectoryTree