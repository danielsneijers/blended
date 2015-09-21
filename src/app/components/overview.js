import React, { Component } from 'react/addons';
import { Link } from 'react-router'
import Slide from './slide';

const {addons: {CSSTransitionGroup}} = React;

class Overview extends Component {

	constructor(props) {
		super(props);
	}

	// Render
	render() {
		return (
			<ul className='overview-container'>
				<li className='overview-item' onClick={this.handleSlideClick}>
					<Link to="/slides/1">
						<Slide slideId='1' />
					</Link>
				</li>
        <li className='overview-item'><Slide slideId='2' /></li>
        <li className='overview-item'><Slide slideId='3' /></li>
        <li className='overview-item'><Slide slideId='4' /></li>
	  	</ul>);
	}
};

export default Overview