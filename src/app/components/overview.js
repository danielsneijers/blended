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
    }).on('drop', el => this.saveSortingOrder(this.props.allSlides, document.getElementsByClassName('overview-item'), el));
  }

	// Helpers
	saveSortingOrder(allSlides, renderedSlides, el) {
		let newSlides = [],
				cleanRenderedSlides = this.cleanRenderedSlidesCollection(renderedSlides),
				newIndexes = [],
				i = 0;
		for(let renderedSlide of cleanRenderedSlides){
			newIndexes.push(parseInt(renderedSlide.getAttribute('id')));
		}
		console.log(newIndexes);
		for(let slides in allSlides){
			//TODO: check parseInt, something isn't working
			console.log(allSlides[i].id);
			let newPosition = newIndexes.indexOf(parseInt(allSlides[i].id));
			newPosition++;
			allSlides[i].position = newPosition;
			i++;
		}
		console.log(newSlides);
		SlideActions.updateAll(allSlides);
		//window.AppRouter.transitionTo('/slide/1');
	}
	cleanRenderedSlidesCollection(renderedSlides) {
		let cleanRenderedSlides = [];
		[].forEach.call(renderedSlides, (el) => {
    	if(!el.classList.contains('gu-mirror'))
    		cleanRenderedSlides.push(el);
		});
		return cleanRenderedSlides;
	}

	// Render
	render() {

		let slides = [],
				i = 1;

		for(let slide of this.props.allSlides){
			let url = `/slide/${slide.position}`,
					key = `slide-${slide.id}-${slide.position}`;
			slides.push(
				<div key={key} id={slide.id} data-position={i} className='overview-item'>
					<Link to={url}><SlidePreview slide={slide} /></Link>
				</div>
			);
			i++;
		};

		return (
			<div className='overview-container'>
				{slides}
	  	</div>);
	}
};

export default Overview