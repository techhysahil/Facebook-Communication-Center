import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers,createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

import { directory } from './reducer/reducer';
import DirectoryTree from './container/DirectoryContainer';


const rootReducer = combineReducers({directory});

const store = createStore(
  rootReducer,
  applyMiddleware()
)

ReactDOM.render(
	<Provider store={store}>
		<div>
		<Router>
		    <div>
		      <Route exact path="/" component={DirectoryTree} />
		      <Route
			    children={({ location }) => {
			      let params = location.pathname.split("/");
			      let first = params[1];
			      let rest = params.slice(2);
			      let path = `/:${first}${rest.map(x => `/:${x}?`).join("")}`;
			      return <Route path={path} component={DirectoryTree} />;
			    }}
			  />
		    </div>
		  </Router>
		</div>
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
