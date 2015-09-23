import React, { Component } from 'react/addons';
import { RouteHandler } from 'react-router';
import SlideActions from '../actions/slideActions.js';

const {addons: {CSSTransitionGroup}} = React;

class Main extends Component {

	constructor(props) {
		super(props);
	}
	componentDidMount() {
		// SlideActions.fetchAll();
	}

	// Methods
	switchToFullScreen(e) {
		e.preventDefault();
		
		let elem = document.getElementById("page-container");

		if (elem.requestFullscreen) {
		  elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
		  elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
		  elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
		  elem.webkitRequestFullscreen();
		}
	}

	handleCreate(e) {
		SlideActions.createSlide();
	}

	handleDeleteAll(e) {
		SlideActions.deleteAll();
	}

	tempGetall() {
		SlideActions.fetchAll();
	}

	// Render
	render() {
		return (
			<div id='page-container'>
        <CSSTransitionGroup transitionName='slideInDown' transitionAppear={true}>
        	<nav className='navigation' role='navigation'>
        		<h1>Blended</h1>
          	<button className='hidden button' onClick={this.switchToFullScreen}>fullscreen</button>
          	<button className='button' onClick={this.handleCreate}>create</button>
          	<button className='button' onClick={this.tempGetall}>get all</button>
          	<button className='button' onClick={this.handleDeleteAll}>delete all</button>
          </nav>
        </CSSTransitionGroup>
        <RouteHandler {...this.props} />
	  	</div>);
	}
};

export default Main