import React, { Component } from 'react/addons';
import { RouteHandler } from 'react-router';
import SlideActions from '../actions/slideActions.js';
import SlideStore from '../stores/slideStore';
import Overview from '../components/overview.js';

const {addons: {CSSTransitionGroup}} = React;

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
			allSlides: [],
			currentSlide: {}
		}
	}
	componentWillMount() {
		SlideStore.addChangeListener(this._onChange.bind(this));
	}
	componentDidMount() {
		SlideActions.getAll();
	}
	componentWillUnmount() {
		SlideStore.removeChangeListener(this._onChange.bind(this));
	}

	// Methods
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
		SlideActions.createSlide();
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
        <Overview allSlides={this.state.allSlides} />
        <RouteHandler {...this.props} slide={this.state.currentSlide} />
	  	</div>);
	}

	// onChange
	_onChange(){
		this.setState({
			allSlides: SlideStore.getAllSlides(),
			currentSlide: SlideStore.getSlide(this.props.params.id)
		});
	}
};

export default Main