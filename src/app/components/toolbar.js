import React, { Component } from 'react/addons';
import Key from 'keymaster';
import SlideActions from '../actions/slideActions.js';
import PageContent from '../components/pageContent.js';

const {addons: {CSSTransitionGroup}} = React;

class Toolbar extends Component {

	// Init
	constructor(props) {
		super(props);
	}

	// Component lifecycle
	componentDidMount() {
		Key('up, left', () => this.handleFullScreenNav('prev'));
		Key('down, right', () => this.handleFullScreenNav('next'));
	}

	// Helpers
	switchToFullScreen(e) {
		e.preventDefault();

		let elem = document.getElementById('slide-container');

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
	navigateTo(direction) {
		let route = this.props.params.id;
		direction == 'next' ? route++ : route--;
		window.AppRouter.transitionTo(`/slide/${route}`);
	}
	handleFullScreenNav(direction) {
		let fullscreenEnabled = !window.screenTop && !window.screenY;
		if(fullscreenEnabled) this.navigateTo(direction);
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
      <CSSTransitionGroup transitionName='fadeIn' transitionAppear={true}>
      	<nav className='navigation' role='navigation'>
      		<h4>Blended</h4>
      		<button className='button' onClick={this.navigateTo.bind(this, 'prev')}>prev</button>
        	<button className='button' onClick={this.switchToFullScreen}>play</button>
        	<button className='button' onClick={this.navigateTo.bind(this, 'next')}>next</button>
        	<button className='button' onClick={this.handleCreate}>create</button>
        	<button className='button' onClick={this.handleDeleteAll}>delete all</button>
        </nav>
      </CSSTransitionGroup>);
	}
};

export default Toolbar