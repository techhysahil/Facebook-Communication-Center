import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers,createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

import { directory } from './reducer/reducer';
import DirectoryTree from './container/DirectoryContainer';
// import AddDirectory from './container/AddDirectory';
// import BreadCrumb from './container/BreadCrumb';


const rootReducer = combineReducers({directory});

const store = createStore(
  rootReducer,
  applyMiddleware()
)
window.store = store;

console.log(store.getState())

ReactDOM.render(
	<Provider store={store}>
		<div>
		<Router>
		    <div>
		      <Route exact path="/" component={DirectoryTree} />
		      <Route path="/:paramId" component={DirectoryTree} />
		    </div>
		  </Router>
		</div>
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
