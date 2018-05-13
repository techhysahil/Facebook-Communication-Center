import React from 'react';
import { connect } from 'react-redux';

const  divStyle = {
  display: 'inline-block',
  marginRight: '20px'
};
const breadCrumb = ({data}) => {
	return(
		data.map((item,index) => {
			return <div key={index} style={divStyle} className="item">{item}</div>
		})
	)
}

const mapStateToProps = (state,props) => ({
  match: props.match,
  data :props.data
})

const mapDispatchToProps = (dispatch) => ({
    // addDirectory: () => dispatch(addDirectory())
})

export default connect(
  null,
  mapDispatchToProps
)(breadCrumb)
