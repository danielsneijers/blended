import React, { Component } from 'react/addons';
import { Link } from 'react-router';
import SlideActions from '../actions/slideActions.js';
import SlideStore from '../stores/slideStore';
import Slide from './slide';

const {addons: {CSSTransitionGroup}} = React;

class Overview extends Component {

	// Component lifecycle
	constructor(props) {
		super(props);
		this.state = {
			allSlides: []
		}
	}
	componentWillMount() {
		SlideStore.addChangeListener(this._onChange.bind(this));
	}
	componentDidMount() {
		SlideActions.getAll();
	}
	componentWillUnmount() {
		SlideStore.removeChangeListener(this._onChange.bind(this));
	}

	// Render
	render() {

		let slides = [];

		for(let i = 0; i < this.state.allSlides.length; i++){
			let url = `/slides/${this.state.allSlides[i].id}`;
			let key = `overview-slide-${this.state.allSlides[i].id}`;

			slides.push(
				<li key={key} className='overview-item'>
					<Link to={url}><Slide slideId={this.state.allSlides[i].id} /></Link>
				</li>
			);
		};

		return (
			<ul className='overview-container'>
				{slides}
	  	</ul>);
	}

	_onChange(){
		this.setState({ allSlides: SlideStore.getSlides() });
	}
};

export default Overview