import React, { Component } from 'react/addons';
import { RouteHandler } from 'react-router';
import SlideActions from '../actions/slideActions.js';
import SlideStore from '../stores/slideStore';

const {addons: {CSSTransitionGroup}} = React;

class Main extends Component {

	constructor(props) {
		super(props);
	}
	componentWillMount() {
		SlideStore.addChangeListener(this._onChange.bind(this));
	}
	componentWillUnmount() {
		SlideStore.removeChangeListener(this._onChange.bind(this));
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
		SlideActions.getAll();
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

	_onChange(){
		console.log('hoi');
		//this.setState({ commits: CommitStore.getCommits() });
	}
};

export default Main