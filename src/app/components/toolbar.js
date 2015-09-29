import React, { Component } from 'react/addons';
import Key from 'keymaster';
import SlideActions from '../actions/slideActions.js';
import PageContent from '../components/pageContent.js';

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

	// Event handlers
	handleFullScreenNav(direction) {
		let fullscreenEnabled = !window.screenTop && !window.screenY;
		if(fullscreenEnabled) this.props.navigateTo(direction);
	}
	handleCreate(e) {
		let slidePosition = document.getElementsByClassName('overview-item').length + 1;
		SlideActions.createSlide(slidePosition);
	}
	handleDeleteAll(e) {
		SlideActions.deleteAll();
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

	// Render
	render() {
		return (
    	<div className='toolbar'>
    		<h4>Blended</h4>
    		<nav className='transport-buttons'>
    			<button className='button' onClick={this.props.navigateTo.bind(this, 'first')}>
    				<img className='icon' src='/img/icon-first.svg' alt='First icon' />
    			</button>
      		<button className='button' onClick={this.props.navigateTo.bind(this, 'prev')}>
    				<img className='icon' src='/img/icon-back.svg' alt='Back icon' />
      		</button>
        	<button className='button' onClick={this.switchToFullScreen}>
    				<img className='icon play-icon' src='/img/icon-play.svg' alt='Play icon' />
        	</button>
        	<button className='button mirrored' onClick={this.props.navigateTo.bind(this, 'next')}>
    				<img className='icon' src='/img/icon-back.svg' alt='Forward icon' />
        	</button>
        	<button className='button mirrored' onClick={this.props.navigateTo.bind(this, 'last')}>
    				<img className='icon' src='/img/icon-first.svg' alt='Last icon' />
        	</button>
      	</nav>
      	<div className='crud-buttons'>
      		<button className='button' onClick={this.handleCreate}>New Slide</button>
      		<button className='button button-danger' onClick={this.handleDeleteAll}>Delete all</button>
      	</div>
      </div>);
	}
};

export default Toolbar