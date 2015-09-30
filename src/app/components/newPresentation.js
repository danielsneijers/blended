import React, { Component } from 'react/addons';
import SlideActions from '../actions/slideActions';

class NewPresentation extends Component {

	// Init
	constructor(props) {
		super(props);
	}

	// Component lifecycle
	componentWillMount() {
		// init db
		SlideActions.getAll();
	}

	// Event handlers
	handleCreateSlide() {
		SlideActions.createSlide();
		window.AppRouter.transitionTo('/slide/1');
	}

	// Render
	render() {

		return (
			<div className='new-presentation-container'>
				<div>
        	<h2>Hi there!</h2>
        	<p>It looks like you have no content yet</p>
        	<p><a onClick={this.handleCreateSlide}>Create your first slide</a></p>
        	<p>or</p>
        	<p><a>Upload an existing presentation</a></p>
        </div>
	  	</div>);
	}
};

export default NewPresentation