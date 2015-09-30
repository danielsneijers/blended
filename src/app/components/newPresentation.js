import React, { Component } from 'react/addons';
import SlideActions from '../actions/slideActions';
import SlideStore from '../stores/slideStore';
import Seed from '../util/seed';

class NewPresentation extends Component {

	constructor(props) {
		super(props)
	}

	// Component lifecycle
	componentWillMount() {
		SlideStore.addChangeListener(this._onChange);
		SlideActions.getAll();
	}
	componentWillUnmount() {
		SlideStore.removeChangeListener(this._onChange);
	}

	// Event handlers
	handleCreateSlide() {
		SlideActions.createSlide();
	}
  handlePresentationSeed(e) {
  	console.log('Seed');
  	SlideActions.updateAll(Seed);
  }

	// Render
	render() {

		return (
			<div className='new-presentation-container'>
				<div>
        	<h2>Hi there!</h2>
        	<p>There's nothing to enjoy here yet, <br/>but the world is your canvas.</p>
        	<p><button className='button start-button' onClick={this.handleCreateSlide}>Create a slide!</button></p>
        	<p>or</p>
      		<button className='button seed-button' onClick={this.handlePresentationSeed}>
      			Enjoy Daniel's Awesome Presentation ™
        	</button>
        </div>
	  	</div>);
	}

		_onChange(){
			console.log('onchage!');
			let allSlides = SlideStore.getAllSlides();
			if( allSlides.length > 0 ){
				window.AppRouter.transitionTo('/slide/1');
			}
		}
};

export default NewPresentation