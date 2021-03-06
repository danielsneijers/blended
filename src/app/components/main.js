import React, { Component } from 'react/addons';
import { RouteHandler } from 'react-router';
import SlideActions from '../actions/slideActions';
import Toolbar from './toolbar'
import PageContent from './pageContent';

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
			slideCount: 0
		}
		this.setTotalSlideCount = this.setTotalSlideCount.bind(this);
		this.navigateTo = this.navigateTo.bind(this);
		this.calculateRoute = this.calculateRoute.bind(this);
	}

	// Helpers
	setTotalSlideCount(count) {
		this.setState({ slideCount: count });
	}
	navigateTo(direction) {
		let fullscreenEnabled = !window.screenTop && !window.screenY,
				route = this.calculateRoute(direction, this.props.params.id);

		if(route < 1) route = 1;
		window.AppRouter.transitionTo(`/slide/${route}`);
	}
	calculateRoute(direction, route) {
		switch(direction) {
	    case 'first':
        route = 1;
        break;
	    case 'prev':
        route--;
        break;
      case 'next':
        route < this.state.slideCount ? route++ : route;
        break;
      case 'last':
        route = this.state.slideCount;
        break;
		}
		return route;
	}

	// Render
	render() {
		return (
			<div id='page-container' className='fill-screen'>
        <Toolbar {...this.props} navigateTo={this.navigateTo} />
        <div>
        	<RouteHandler {...this.props} navigateTo={this.navigateTo} setTotalSlideCount={this.setTotalSlideCount} />
        </div>
	  	</div>);
	}
};

export default Main