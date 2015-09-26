import React, { Component } from 'react/addons';
import { RouteHandler } from 'react-router';
import SlideActions from '../actions/slideActions.js';
import PageContent from '../components/pageContent.js';

const {addons: {CSSTransitionGroup}} = React;

class Main extends Component {

	// Init
	constructor(props) {
		super(props);
	}

	// Helpers
	switchToFullScreen(e) {
		e.preventDefault();

		let elem = document.getElementById("active-slide");

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
		let slidePosition = document.getElementsByClassName('overview-item').length + 1;
		SlideActions.createSlide(slidePosition);
	}
	handleDeleteAll(e) {
		SlideActions.deleteAll();
	}

	// Render
	render() {
		return (
			<div id='page-container'>
        <CSSTransitionGroup transitionName='slideInDown' transitionAppear={true}>
        	<nav className='navigation' role='navigation'>
        		<h4>Blended</h4>
          	<button className='button' onClick={this.switchToFullScreen}>fullscreen</button>
          	<button className='button' onClick={this.handleCreate}>create</button>
          	<button className='button' onClick={this.handleDeleteAll}>delete all</button>
          </nav>
        </CSSTransitionGroup>
        <RouteHandler />
	  	</div>);
	}
};

export default Main