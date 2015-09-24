import React, { Component } from 'react/addons';
import { Link } from 'react-router';
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
	componentWillReceiveProps(nextProps) {
		this.setState({ allSlides: nextProps.allSlides });
	}

	// Render
	render() {

		let slides = [];

		for(let i = 0; i < this.state.allSlides.length; i++){
			let url = `/slide/${this.state.allSlides[i].id}`;
			let key = `overview-slide-${this.state.allSlides[i].id}`;
			slides.push(
				<li key={key} className='overview-item'>
					<Link to={url}><SlidePreview slideId={this.state.allSlides[i].id} /></Link>
				</li>
			);
		};

		return (
			<ul className='overview-container'>
				{slides}
	  	</ul>);
	}

	_onChange(){
		this.setState({ allSlides: SlideStore.getAllSlides() });
	}
};

export default Overview