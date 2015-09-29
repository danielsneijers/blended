import React, { Component } from 'react/addons';
import Classnames from 'classnames';
import SlideActions from '../actions/slideActions';
import SlideStore from '../stores/slideStore';
import SlideOptions from './slideOptions';
import TitleSlide from './slide-types/titleSlide';
import SingleSlide from './slide-types/singleSlide';
import SplitSlide from './slide-types/splitSlide';

const {addons: {CSSTransitionGroup}} = React;

class SlideContainer extends Component {

	// Init
	constructor(props) {
		super(props);
		this.state = {
			optionsActive: window.location.hash == `#editing`
		}
	}

  // Event listeners
  handleEditButtonClick(e) {
  	e.preventDefault();
  	this.state.optionsActive ? window.location.hash = '' : window.location.hash += '#editing';
  	this.setState({
  		optionsActive: !this.state.optionsActive
  	});
  }
  // Helpers
  saveSlideContent(property, value, slide) {
  	slide[property] = value;
  	SlideActions.updateSlide(slide);
  }

	// Render
	render() {

		let slide;

		switch(this.props.slide.type){
			case 'title':
				slide = (<TitleSlide slideContent={this.props.slide} saveSlideContent={this.saveSlideContent} />);
				break;
			case 'single':
				slide = (<SingleSlide slideContent={this.props.slide} saveSlideContent={this.saveSlideContent} />);
				break;
			case 'split':
				slide = (<SplitSlide slideContent={this.props.slide} saveSlideContent={this.saveSlideContent} />);
				break;
		}

		return (
			<CSSTransitionGroup className="slide" transitionName='fadeIn' transitionAppear={true} component='div'>
				{slide}
				<SlideOptions currentSlide={this.props.slide} optionsActive={this.state.optionsActive} />
				<button className='button button-triangle button-triangle-large options-button' onClick={this.handleEditButtonClick.bind(this)}>
					<img className='icon' src='/img/icon-setting.svg' alt='Settings icon' />
				</button>
	  	</CSSTransitionGroup>
		);
	}

};

export default SlideContainer;