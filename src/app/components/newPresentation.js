import React, { Component } from 'react/addons';
import SlideActions from '../actions/slideActions';
import SlideStore from '../stores/slideStore';

class NewPresentation extends Component {

	constructor(props) {
		super(props)
		// this.state = {
		// 	allSlides: []
		// }
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
  handleUpload(e) {
    // var self = this;
    // var reader = new FileReader();
    // var file = e.target.files[0];

    // reader.onload = function(upload) {
    //   self.setState({
    //     newArtefact: upload.target.result,
    //   });
    // }
    // reader.readAsText(file);
    // mixpanel.track("New artefact file upload clicked");
  }

	// Render
	render() {

		return (
			<div className='new-presentation-container'>
				<div>
        	<h2>Hi there!</h2>
        	<p>It looks like you have no content yet</p>
        	<p><button className='button' onClick={this.handleCreateSlide}>Create a slide!</button></p>
        	<p>or</p>
      		<button className='button' onChange={this.handlePresentationSeed}>
      			Enjoy Daniel's Awesome Presentation ™
        	</button>
        </div>
	  	</div>);
	}

		_onChange(){
			let allSlides = SlideStore.getAllSlides();
			if( allSlides.length > 0 ){
				window.AppRouter.transitionTo('/slide/1');
			}
		}
};

export default NewPresentation