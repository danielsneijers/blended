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
	componentWillReceiveProps(nextProps) {
		this.isolateCurrentSlide(nextProps.params.id);
	}
	componentDidUpdate(prevProps, prevState) {
		// TODO: extend this function to handle out of bounds routes
		if(Object.keys(this.props.params).length === 0){
			window.AppRouter.transitionTo('/slide/1');
		}
	}
	componentWillUnmount() {
		SlideStore.removeChangeListener(this._onChange.bind(this));
	}

	// Helpers
	isolateCurrentSlide(slideId) {
		for(let slide of this.state.allSlides){
			if(slide.position == slideId) this.setState({ currentSlide: slide });
		}
	}

	// Render
	render() {

		let SlideKey = `slide-${this.state.currentSlide.id}-${this.state.currentSlide.position}`;

		if(Object.keys(this.state.currentSlide).length === 0){
			console.info('yolo')
		}

		return (
			<div className='page-content'>
        <Overview allSlides={this.state.allSlides} />
        <div id='slide-container'>
        	<SlideContainer key={SlideKey} slide={this.state.currentSlide} />
        </div>
	  	</div>);
	}

	// onChange
	_onChange(){
		let slides = SlideStore.getAllSlides();
		this.setState({ currentSlide: {} });
		slides.sort(function(a, b) {
		  return parseInt(a.position) - parseInt(b.position);
		});
		this.setState({ allSlides: slides });
		this.isolateCurrentSlide(this.props.params.id);
	}
};

export default PageContent