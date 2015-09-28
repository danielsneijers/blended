import React, { Component } from 'react/addons';
import Classnames from 'classnames';

class SingleSlide extends Component {

	// Event listeners
	handleOnBlur(property, e) {
		let slide = this.props.slideContent;
		this.props.saveSlideContent(property, slide, e);
	}

	// Render
	render() {

		console.log(this.props.slideContent)

		let slide = this.props.slideContent,
				emptySlide = Object.keys(slide).length === 0,
				title = slide.title,
				body = slide.body || '';

		let styles = {
		  backgroundImage: `url(/img/ferris-wheel.jpeg)`,
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