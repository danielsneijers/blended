import React, { Component } from 'react/addons';
import Classnames from 'classnames';

class SingleSlide extends Component {

	// Event listeners
	handleOnBlur(property, e) {
		let value = e.currentTarget.innerHTML,
				slide = this.props.slideContent;
		this.props.saveSlideContent(property, value, slide);
	}

	// Render
	render() {

		let slide = this.props.slideContent,
				emptySlide = Object.keys(slide).length === 0,
				title = slide.title,
				body = slide.body;

		let styles = {
			textAlign: slide.textAlign,
			color: slide.color,
			backgroundColor: slide.backgroundColor,
		  backgroundImage: `url(${slide.backgroundUrl})`,
		};

		return (
			<div className='content' style={styles}>
				<h1 contentEditable='true'
					onBlur={this.handleOnBlur.bind(this, 'title')}
					dangerouslySetInnerHTML={{__html: title}} >
				</h1>
				<p contentEditable='true'
					onBlur={this.handleOnBlur.bind(this, 'body')}
					dangerouslySetInnerHTML={{__html: body}} >
				</p>
			</div>
		);
	}

};

export default SingleSlide;