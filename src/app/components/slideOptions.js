import React, { Component } from 'react/addons';
import Classnames from 'classnames';
import SlideActions from '../actions/slideActions';

class SlideOptions extends Component {

	// Init
	constructor(props){
		super(props);
		this.handleBackgroundImagesUpdate = this.handleBackgroundImagesUpdate.bind(this);
	}

	// Event handlers
	handleColorChange(property, e) {
		let newColor = e.currentTarget.value;
		this.updateSlide(property, newColor);
	}
	handleBackgroundImagesUpdate() {
		let image1 = React.findDOMNode(this.refs.bgImgField1).value,
				newSlide = this.prepareNewSlide('backgroundUrl', image1);
		SlideActions.updateSlide(newSlide);

		let image2 = React.findDOMNode(this.refs.bgImgField2).value;
		newSlide = this.prepareNewSlide('backgroundUrl2', image2);
		SlideActions.updateSlide(newSlide);
	}

	// Helpers
	prepareNewSlide(property, value){
		let newState = this.props.currentSlide;
		newState[property] = value;
		return newState;
	}
	updateSlide(property, value) {
		let	newSlide = this.prepareNewSlide(property, value);
		SlideActions.updateSlide(newSlide);
	}

	// Render
	render() {

		let slide = this.props.currentSlide;

		// Dynamic classes
		let slideOptionClasses = Classnames('slide-options', {
			active: this.props.optionsActive
		});
		let titleButtonClasses = Classnames('button inverted', {
			active: slide.type == 'title'
		});
		let titleBodyButtonClasses = Classnames('button inverted', {
			active: slide.type == 'single'
		});
		let splitButtonClasses = Classnames('button inverted', {
			active: slide.type == 'split'
		});
		let leftAlignButtonClasses = Classnames('button inverted', {
			active: slide.textAlign == 'left'
		});
		let centerAlignButtonClasses = Classnames('button inverted', {
			active: slide.textAlign == 'center'
		});
		let rightAlignButtonClasses = Classnames('button inverted', {
			active: slide.textAlign == 'right'
		});

		return (
			<div className={slideOptionClasses}>
				<div className='button-group options-row'>
					<h4>Slide type</h4>
					<button className={titleButtonClasses} onClick={this.updateSlide.bind(this, 'type', 'title')}>Title only</button>
					<button className={titleBodyButtonClasses} onClick={this.updateSlide.bind(this, 'type', 'single')}>Title + body</button>
					<button className={splitButtonClasses} onClick={this.updateSlide.bind(this, 'type', 'split')}>Split pane</button>
				</div>
				<div className='button-group options-row'>
					<h4>Text align</h4>
					<button className={leftAlignButtonClasses} onClick={this.updateSlide.bind(this, 'textAlign', 'left')}>Left</button>
					<button className={centerAlignButtonClasses} onClick={this.updateSlide.bind(this, 'textAlign', 'center')}>Center</button>
					<button className={rightAlignButtonClasses} onClick={this.updateSlide.bind(this, 'textAlign', 'right')}>Right</button>
				</div>
				<div className='options-row'>
					<h4>Text color</h4>
					<input type='color' defaultValue={slide.color} onChange={this.handleColorChange.bind(this, 'color')} />
				</div>
				<form>
					<div className='options-row'>
						<h4>Left pane Background</h4>
						<input type='color' defaultValue={slide.backgroundColor} onChange={this.handleColorChange.bind(this, 'backgroundColor')} />
						<input id='background-image-field' name='background-image-field' type='text' defaultValue={slide.backgroundUrl} ref='bgImgField1' />
					</div>
					<div className='options-row'>
						<h4>Right pane background</h4>
						<input type='color' defaultValue={slide.backgroundColor2} onChange={this.handleColorChange.bind(this, 'backgroundColor2')} />
						<input id='background-image-field2' name='background-image-field2' type='text' defaultValue={slide.backgroundUrl2} ref='bgImgField2' />
					</div>
				</form>
				<button className='button' onClick={this.handleBackgroundImagesUpdate}>Update</button>
			</div>
		);
	}

};

export default SlideOptions;