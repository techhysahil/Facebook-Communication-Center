import React from 'react';
import { connect } from 'react-redux';
import { addNewDirectory } from '../action/action';
import Modal from '../component/modal';

const divStyle = {
  border: '1px solid #ccc',
  padding: '4px 12px',
  display: 'inline-block',
  cursor: 'pointer',
  float: 'right'
};

const btn = {
	border: '1px solid #ccc',
	padding: '8px 12px',
	display: 'inline-block',
	cursor: 'pointer',
	verticalAlign: 'top',
    marginLeft: '10px'
}
const input = {
	height : '32px'
}

class addDirectory extends React.Component {
	constructor() {
		super()
		this.state = {
			updatetextval : "",
			showModal : false
		}
		this.updateTextVal = this.updateTextVal.bind(this);
		this.addNewDirectory = this.addNewDirectory.bind(this);
		this.openModel = this.openModel.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	closeModal(){
		this.setState({
			showModal : false
		})
	}

	openModel(){
		this.setState({
			showModal : true
		})
	}

	updateTextVal(e){
		this.setState({
			updatetextval : e.target.value
		})
	}

	addNewDirectory(){
		if(this.state.updatetextval){
			this.props.addNewDirectory(this.state.updatetextval);
			this.setState({
				updatetextval : ""
			})
			this.closeModal();
		}
	}

	render(){
		return (
			<div>
				<div style={divStyle} onClick={this.openModel}>Add Directory</div>
				<Modal onClose={this.closeModal} show={this.state.showModal}>
					<input style={input} type="text" value={this.state.updatetextval} onChange={this.updateTextVal} />
					<div style={btn} onClick={this.addNewDirectory}>Add</div>
				</Modal>
			</div>
			
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
    addNewDirectory: (name) => dispatch(addNewDirectory(name))
})

export default connect(
  null,
  mapDispatchToProps
)(addDirectory)
