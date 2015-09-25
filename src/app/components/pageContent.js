import React, { Component } from 'react/addons';
import SlideActions from '../actions/slideActions.js';
import SlideStore from '../stores/slideStore';
import Overview from '../components/overview.js';
import SlideContainer from '../components/slideContainer.js';

const {addons: {CSSTransitionGroup}} = React;

class PageContent extends Component {

	// Init
	constructor(props) {
		super(props);
		this.state = {
			allSlides: [],
			currentSlide: {}
		}
	}

	// Component lifecycle
	componentWillMount() {
		SlideStore.addChangeListener(this._onChange.bind(this));
	}
	componentDidMount() {
		SlideActions.getAll();
	}
	componentDidUpdate(prevProps, prevState) {
		// TODO: extend this function to handle out of bounds routes
		if(Object.keys(this.props.params).length === 0){
			window.AppRouter.transitionTo('/slide/1');
		} else {
	  	this.isolateCurrentSlide(this.props.params.id);
		}
	}
	componentWillUnmount() {
		SlideStore.removeChangeListener(this._onChange.bind(this));
	}

	// Helpers
	isolateCurrentSlide(slideId) {
		console.log('getslide', slideId);
		// console.log('router? ',window.AppRouter);
		//window.AppRouter.transitionTo('/slide/1');
	}

	// Render
	render() {
		return (
			<div id='page-content'>
        <Overview allSlides={this.state.allSlides} />
        <SlideContainer slide={this.state.currentSlide} />
	  	</div>);
	}

	// onChange
	_onChange(){
		this.setState({ allSlides: SlideStore.getAllSlides() });
		console.log(this.state.allSlides);
	}
};

export default PageContent