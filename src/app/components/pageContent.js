import React, { Component } from 'react/addons';
import SlideActions from '../actions/slideActions';
import SlideStore from '../stores/slideStore';
import Overview from '../components/overview';
import SlideContainer from '../components/slideContainer';

class PageContent extends Component {

	// Init
	constructor(props) {
		super(props);
		this.state = {
			allSlides: [],
			currentSlide: {},
			slideCount: 0
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
		let routeId = nextProps.params.id,
				slideCount = this.state.slideCount;
		if ( slideCount && routeId > slideCount){
			console.log('bigger');
			this.props.navigateTo('last');
		} else if(slideCount == 0) {
			console.log('no slides!');
			window.AppRouter.transitionTo(`/start`);
		} else {
			this.isolateCurrentSlide(routeId);
		}
	}
	componentDidUpdate(prevProps, prevState) {
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
		this.setState({
			allSlides: slides,
			slideCount: slides.length });
		this.isolateCurrentSlide(this.props.params.id);
		this.props.setTotalSlideCount(this.state.slideCount);
	}
};

export default PageContent