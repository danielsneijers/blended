import React, { Component } from 'react/addons';
import { Link } from 'react-router';
import Dragula from 'react-dragula';
import SlideActions from '../actions/slideActions.js';
import SlideStore from '../stores/slideStore';
import SlidePreview from './slidePreview';

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
    }).on('drop', el => this.updateAllSlides(this.props.allSlides, document.getElementsByClassName('overview-item'), el));
  }

	// Helpers
	updateAllSlides(allSlides, renderedSlides) {
		let cleanRenderedSlides = this.cleanRenderedSlidesCollection(renderedSlides),
				updatedIndexes = this.generateNewIndexes(cleanRenderedSlides),
				updatedSlides = this.sortSlides(allSlides, updatedIndexes);
		SlideActions.updateAll(updatedSlides);
	}
	cleanRenderedSlidesCollection(renderedSlides) {
		let cleanRenderedSlides = [];
		[].forEach.call(renderedSlides, element => {
    	if(!element.classList.contains('gu-mirror'))
    		cleanRenderedSlides.push(element);
		});
		return cleanRenderedSlides;
	}
	generateNewIndexes(cleanRenderedSlides) {
		let newIndexes = [];
		for(let cleanRenderedSlide of cleanRenderedSlides){
			newIndexes.push(parseInt(cleanRenderedSlide.getAttribute('id')));
		}
		return newIndexes;
	}
	sortSlides(allSlides, indexes) {
		let i = 0;
		for(let slides in allSlides){
			let newPosition = indexes.indexOf(parseInt(allSlides[i].id));
			newPosition++;
			allSlides[i].position = newPosition;
			i++;
		}
		return allSlides;
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
					<Link to={url} className='item-link'><SlidePreview slide={slide} /></Link>
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