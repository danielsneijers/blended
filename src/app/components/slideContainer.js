import React, { Component } from 'react/addons';
import Classnames from 'classnames';
import SlideActions from '../actions/slideActions';
import SlideStore from '../stores/slideStore';

const {addons: {CSSTransitionGroup}} = React;

class CommitList extends Component {

  // Helpers
  saveSlideContent(property, e) {
  	let optimisticUpdatedSlide = this.props.slide;
  	optimisticUpdatedSlide[property] = e.currentTarget.innerHTML;
  	SlideActions.updateSlide(optimisticUpdatedSlide);
  }

	// Render
	render() {

		console.log(this.props.slide);

		let slide = this.props.slide,
				emtpySlide = Object.keys(slide).length === 0,
				title = slide.title;

		let styles = {
		  backgroundImage: `url(/img/bridge.jpeg)`,
		};

		let containerClasses = Classnames('slide-container', {
			hidden: emtpySlide
		})

		return (
			<CSSTransitionGroup transitionName='fadeIn' transitionAppear={true} component='div'>
				<div className={containerClasses}>
					<div id="active-slide" className="slide">
						<div className='content' style={styles}>
							<h1 contentEditable='true'
								onBlur={this.saveSlideContent.bind(this, 'title')}>
									{title}
							</h1>
						</div>
					</div>
				</div>
	  	</CSSTransitionGroup>
		);
	}

};

export default CommitList;