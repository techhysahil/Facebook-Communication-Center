import React from 'react';
import { connect } from 'react-redux';

const  divStyle = {
  display: 'inline-block',
  marginRight: '20px'
};

const linkArr = ['/']
const breadCrumb = ({match}) => {
	return(
		linkArr.map((item,index) => {
			return <div key={index} style={divStyle} className="item">{item}</div>
		})
	)
}

const mapDispatchToProps = (dispatch) => ({
    // addDirectory: () => dispatch(addDirectory())
})

export default connect(
  null,
  mapDispatchToProps
)(breadCrumb)
