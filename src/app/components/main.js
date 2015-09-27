import React, { Component } from 'react/addons';
import { RouteHandler } from 'react-router';
import SlideActions from '../actions/slideActions.js';
import Toolbar from './toolbar.js'
import PageContent from './pageContent.js';

class Main extends Component {

	// Render
	render() {
		return (
			<div id='page-container'>
        <Toolbar {...this.props} />
        <div>
        	<RouteHandler />
        </div>
	  	</div>);
	}
};

export default Main