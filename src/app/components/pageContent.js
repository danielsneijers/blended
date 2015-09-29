import React, { Component } from 'react/addons';
import SlideActions from '../actions/slideActions.js';
import SlideStore from '../stores/slideStore';
import Overview from '../components/overview.js';
import SlideContainer from '../components/slideContainer.js';

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

	// Event handlers
	handleContainerClick(e) {
		let fullscreenEnabled = !window.screenTop && !window.screenY;
		if(fullscreenEnabled) this.props.navigateTo('next');
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

		return (
			<div className='page-content'>
        <Overview allSlides={this.state.allSlides} />
        <div id='slide-container' onClick={this.handleContainerClick.bind(this)}>
        	<SlideContainer key={SlideKey} slide={this.state.currentSlide} />
        </div>
	  	</div>);
	}

	// onChange
	_onChange(){
		// Current slide needs to be empty for 'leave' animation
		this.setState({ currentSlide: {} });
		let slides = SlideStore.getAllSlides();
		slides.sort(function(a, b) {
		  return parseInt(a.position) - parseInt(b.position);
		});
		this.setState({ allSlides: slides });
		this.isolateCurrentSlide(this.props.params.id);
	}
};

export default PageContent