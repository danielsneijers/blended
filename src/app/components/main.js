import React, { Component } from 'react/addons';
import { RouteHandler } from 'react-router';
import Key from 'keymaster';
import SlideActions from '../actions/slideActions.js';
import Toolbar from './toolbar.js'
import PageContent from './pageContent.js';

class Main extends Component {

	// Component lifecycle
	componentDidMount() {
		Key('up, left', () => this.handleFullScreenNav('prev'));
		Key('down, right', () => this.handleFullScreenNav('next'));
	}

	// Render
	render() {
		return (
			<div id='page-container'>
        <Toolbar {...this.props} />
        <RouteHandler />
	  	</div>);
	}
};

export default Main