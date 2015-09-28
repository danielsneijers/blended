import React, { Component } from 'react/addons';
import Classnames from 'classnames';
import SlideActions from '../actions/slideActions';
import SlideStore from '../stores/slideStore';
import TitleSlide from './slide-types/titleSlide'
import SingleSlide from './slide-types/singleSlide'

const {addons: {CSSTransitionGroup}} = React;

class SlideContainer extends Component {

  // Event listeners
  saveSlideContent(property, slide, e) {
  	slide[property] = e.currentTarget.innerHTML;
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
	  	</CSSTransitionGroup>
		);
	}

};

export default SlideContainer;