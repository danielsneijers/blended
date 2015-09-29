import React, { Component } from 'react/addons';
import Classnames from 'classnames';

class SlitSlide extends Component {

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
				title2 = slide.title2,
				body = slide.body,
				body2 = slide.body2;

		let styles = {
			textAlign: slide.textAlign,
			color: slide.color,
		};

		let leftPaneStyles = {
			backgroundColor: slide.backgroundColor,
		  backgroundImage: `url(${slide.backgroundUrl})`,
		}

		let rightPaneStyle = {
			backgroundColor: slide.backgroundColor2,
		  backgroundImage: `url(${slide.backgroundUrl2})`,
		}

		return (
			<div className='content split-pane' style={styles}>
				<div className='pane left-pane' style={leftPaneStyles} >
					<h1 contentEditable='true'
						onBlur={this.handleOnBlur.bind(this, 'title')}
						dangerouslySetInnerHTML={{__html: title}} >
					</h1>
					<p contentEditable='true'
						onBlur={this.handleOnBlur.bind(this, 'body')}
						dangerouslySetInnerHTML={{__html: body}} >
					</p>
				</div>
				<div className='pane right-pane' style={rightPaneStyle}>
					<h1 contentEditable='true'
						onBlur={this.handleOnBlur.bind(this, 'title2')}
						dangerouslySetInnerHTML={{__html: title2}} >
					</h1>
					<p contentEditable='true'
						onBlur={this.handleOnBlur.bind(this, 'body2')}
						dangerouslySetInnerHTML={{__html: body2}} >
					</p>
				</div>
			</div>
		);
	}

};

export default SlitSlide;