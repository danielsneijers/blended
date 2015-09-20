import React, { Component } from 'react/addons';
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
        <Slide slideId='1' />
        <Slide slideId='2' />
        <Slide slideId='3' />
        <Slide slideId='4' />
        <Slide slideId='5' />
	  	</ul>);
	}
};

export default Overview