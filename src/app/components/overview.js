import React, { Component } from 'react/addons';
import { Link } from 'react-router';
import Dragula from 'react-dragula';
import SlideActions from '../actions/slideActions.js';
import SlideStore from '../stores/slideStore';
import SlidePreview from './slidePreview';

const {addons: {CSSTransitionGroup}} = React;

class Overview extends Component {

	// Component lifecycle
	constructor(props) {
		super(props);
		this.state = {
			allSlides: []
		}
	}
	componentDidMount() {
    let overviewContainer = React.findDOMNode(this);
    Dragula([overviewContainer], {
    	mirrorContainer: overviewContainer
    }).on('dragend', this.saveSortingOrder);
  }
	componentWillReceiveProps(nextProps) {
		this.setState({ allSlides: nextProps.allSlides });
	}

	// Helpers
	saveSortingOrder() {
		console.log('save order');
	}

	// Render
	render() {

		let slides = [];

		for(let i = 0; i < this.state.allSlides.length; i++){
			let url = `/slide/${this.state.allSlides[i].id}`;
			let key = `overview-slide-${this.state.allSlides[i].id}`;
			slides.push(
				<div key={key} className='overview-item'>
					<Link to={url}><SlidePreview slide={this.state.allSlides[i]} /></Link>
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