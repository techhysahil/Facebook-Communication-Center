import React from 'react';
import { connect } from 'react-redux';

const divStyle = {
  border: '1px solid #ccc',
  padding: '4px 12px',
  display: 'inline-block',
  cursor: 'pointer',
  float: 'right'
};

const addDirectory = ({addDirectory}) => {
	return <div style={divStyle} onClick={addDirectory}>Add Directory</div>
}

const mapDispatchToProps = (dispatch) => ({
    addDirectory: () => dispatch(addDirectory())
})

export default connect(
  null,
  mapDispatchToProps
)(addDirectory)
