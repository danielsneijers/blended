import React, { Component } from 'react/addons';
import Classnames from 'classnames';
import SlideActions from '../actions/slideActions';
import SlideStore from '../stores/slideStore';

const {addons: {CSSTransitionGroup}} = React;

class CommitList extends Component {

  // Helpers
  saveSlideContent(property, e) {
  	let slide = this.props.slide;
  	slide[property] = e.currentTarget.innerHTML;
  	SlideActions.updateSlide(slide);
  }

	// Render
	render() {

		let slide = this.props.slide,
				emtpySlide = Object.keys(slide).length === 0,
				title = slide.title;

		let styles = {
		  backgroundImage: `url(/img/bridge.jpeg)`,
		};

		return (
			<CSSTransitionGroup className='slide-container' transitionName='fadeIn' transitionAppear={true} component='div'>
				<div className="slide">
					<div className='content' style={styles}>
						<h1 contentEditable='true'
							onBlur={this.saveSlideContent.bind(this, 'title')}
							dangerouslySetInnerHTML={{__html: title}} >
						</h1>
					</div>
				</div>
	  	</CSSTransitionGroup>
		);
	}

};

export default CommitList;