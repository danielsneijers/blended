import React, { Component } from 'react/addons';
import { Link } from 'react-router';
import Dragula from 'react-dragula';
import SlideActions from '../actions/slideActions.js';
import SlideStore from '../stores/slideStore';
import SlidePreview from './slidePreview';

const {addons: {CSSTransitionGroup}} = React;

class Overview extends Component {

	// Component lifecycle
	componentDidMount() {
    let overviewContainer = React.findDOMNode(this);
    Dragula([overviewContainer], {
    	mirrorContainer: overviewContainer
    }).on('dragend', this.saveSortingOrder);
  }
	componentWillReceiveProps(nextProps) {
		//console.log(nextProps);
	}

	// Helpers
	saveSortingOrder() {
		console.log('save order');
	}

	// Render
	render() {

		let slides = [];

		for(let slide of this.props.allSlides){
			let url = `/slide/${slide.id}`;
			let key = `overview-slide-${slide.id}`;
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