import React, { Component } from 'react/addons';
import { Link } from 'react-router';
import Dragula from 'react-dragula';
import SlideActions from '../actions/slideActions.js';
import SlideStore from '../stores/slideStore';
import SlidePreview from './slidePreview';

const {addons: {CSSTransitionGroup}} = React;

class Overview extends Component {

	// Init
	constructor(props) {
		super(props);
		this.state = {
			slides: []
		}
	}

	// Component lifecycle
	componentDidMount() {
    let overviewContainer = React.findDOMNode(this);
    Dragula([overviewContainer], {
    	mirrorContainer: overviewContainer
    }).on('drop', () => this.saveSortingOrder(this.props.allSlides, document.getElementsByClassName('overview-item')));
  }

	// Helpers
	saveSortingOrder(allSlides, renderedSlides) {
		let slides = allSlides,
				i = 1;
				console.log(renderedSlides);
		for(let slide of slides){
			let renderedId = renderedSlides[i].attributes[1];
			console.log(renderedSlides[i].attributes);
			console.log(renderedId);
			slide.position = i;
			i++;
		}
		SlideActions.updateSlide(slides);
		console.log('save sorting order', slides);
	}

	// Render
	render() {
    console.log('%c overview render ', 'background-color: #E54D42; color: white;');

		let slides = [];

		for(let slide of this.props.allSlides){
			let url = `/slide/${slide.id}`;
			let key = `slide-${slide.id}`;
			slides.push(
				<div key={key} className='overview-item'>
					<Link to={url}><SlidePreview slide={slide} /></Link>
				</div>
			);
		};

		return (
			<div className='overview-container'>
				{slides}
	  	</div>);
	}

	_onChange(){
		this.setState({ allSlides: SlideStore.getAllSlides() });
	}
};

export default Overview