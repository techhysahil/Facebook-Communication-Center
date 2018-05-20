import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { user, comments, commentsTimeline, postList } from "./reducer/reducer";
import Post from "./container/PostContainer";

import './style/main.css';

const rootReducer = combineReducers({ user, comments, commentsTimeline, postList});
const store = createStore(rootReducer, applyMiddleware());

console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div className="app-wrapper">
				<Route exact path="/" component={Post} />
			</div>
		</Router>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
