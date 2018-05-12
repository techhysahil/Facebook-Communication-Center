import { connect } from 'react-redux';

// import {increment, decrement} from '../action/action';
import DirectoryTree from '../component/directory';

const mapStateToProps = (state) => ({
  directoryData: state.directory
})

const mapDispatchToProps = (dispatch) => ({
  // increment: () => dispatch(increment()),
  // decrement: () => dispatch(decrement())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectoryTree)
