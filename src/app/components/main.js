import React, { Component } from 'react/addons';
import { RouteHandler } from 'react-router';
import SlideActions from '../actions/slideActions';
import Toolbar from './toolbar'
import PageContent from './pageContent';

class Main extends Component {

	// Helpers
	navigateTo(direction) {
		console.log(this);
		let fullscreenEnabled = !window.screenTop && !window.screenY,
				route = fullscreenEnabled ? this.params.id : this.props.params.id;
		switch(direction) {
	    case 'first':
        route = 1;
        break;
	    case 'prev':
        route--;
        break;
      case 'next':
        route++;
        break;
      case 'last':
        route++;
        break;
		}
		if(route < 1) route = 1;
		window.AppRouter.transitionTo(`/slide/${route}`);
	}

	testmethod(param) {
		return param;
	}

	// Render
	render() {
		return (
			<div id='page-container'>
        <Toolbar {...this.props} navigateTo={this.navigateTo} />
        <div>
        	<RouteHandler {...this.props} navigateTo={this.navigateTo} />
        </div>
	  	</div>);
	}
};

export default Main