import React, { Component } from 'react/addons';
import { RouteHandler } from 'react-router';

const {addons: {CSSTransitionGroup}} = React;

class Main extends Component {

	constructor(props) {
		super(props);
	}

	// Methods
	switchToFullScreen() {
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

	// Render
	render() {
		return (
			<div id='page-container'>
        <CSSTransitionGroup transitionName='slideInDown' transitionAppear={true}>
        	<nav className='navigation' role='navigation'>
        		<h1>Blended</h1>
          	<button className='button' onClick={this.switchToFullScreen}>fullscreen</button>
          </nav>
        </CSSTransitionGroup>
        <RouteHandler {...this.props} />
	  	</div>);
	}
};

export default Main