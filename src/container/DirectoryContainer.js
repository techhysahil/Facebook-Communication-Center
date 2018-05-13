import { connect } from 'react-redux';

// import {increment, decrement} from '../action/action';
import DirectoryTree from '../component/directory';
import { updatecurrentDirectory, updatecurrentDirectoryNode } from '../action/action';


const mapStateToProps = (state) => ({
  rootDirData: state.directory["currentDirectoryNode"],
  directoryMapping :state.directory.DirectoryMap,
  openModal : state.directory.openModal,
  newDirectoryName : state.directory.newDirectoryName
})

const mapDispatchToProps = (dispatch) => ({
  updateCurrentDirectory: (directory) => dispatch(updatecurrentDirectory(directory)),
  currentDirectoryNode: (nodes) => dispatch(updatecurrentDirectoryNode(nodes))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectoryTree)
