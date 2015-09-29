import React, { Component } from 'react/addons';
import Classnames from 'classnames';
import SlideActions from '../actions/slideActions';

const {addons: {CSSTransitionGroup}} = React;

class SlideOptions extends Component {

	constructor(props){
		super(props);
		this.state = this.props.currentSlide
	}

	// Event handlers
	handleSlideUpdate() {
		let newSlide = this.props.currentSlide;
		for(let key in this.state) {
			newSlide[key] = this.state[key];
		}
		SlideActions.updateSlide(newSlide);
	}
	handleChange(property, value){
		console.log(property, value);
		this.setState({
			[property]: value
		});
		console.log(this.state);
		this.handleSlideUpdate();
	}

	// Render
	render() {

		// Dynamic classes
		let slideOptionClasses = Classnames('slide-options', {
			active: this.props.optionsActive
		});
		let titleButtonClasses = Classnames('button inverted', {
			active: this.state.type == 'title'
		});
		let titleBodyButtonClasses = Classnames('button inverted', {
			active: this.state.type == 'single'
		});
		let splitButtonClasses = Classnames('button inverted', {
			active: this.state.type == 'split'
		});
		let leftAlignButtonClasses = Classnames('button inverted', {
			active: this.state.textAlign == 'left'
		});
		let centerAlignButtonClasses = Classnames('button inverted', {
			active: this.state.textAlign == 'center'
		});
		let rightAlignButtonClasses = Classnames('button inverted', {
			active: this.state.textAlign == 'right'
		});

		return (
			<div className={slideOptionClasses}>
				<div className='button-group options-row'>
					<h4>Slide type</h4>
					<button className={titleButtonClasses} onClick={this.handleChange.bind(this, 'type', 'title')}>Title only</button>
					<button className={titleBodyButtonClasses} onClick={this.handleChange.bind(this, 'type', 'single')}>Title + body</button>
					<button className={splitButtonClasses} onClick={this.handleChange.bind(this, 'type', 'split')}>Split pane</button>
				</div>
				<div className='button-group options-row'>
					<h4>Text align</h4>
					<button className={leftAlignButtonClasses} onClick={this.handleChange.bind(this, 'textAlign', 'left')}>Left</button>
					<button className={centerAlignButtonClasses} onClick={this.handleChange.bind(this, 'textAlign', 'center')}>Center</button>
					<button className={rightAlignButtonClasses} onClick={this.handleChange.bind(this, 'textAlign', 'right')}>Right</button>
				</div>
				<div className='options-row'>
					<h4>Text color</h4>
					<input type='color' />
				</div>
				<form>
					<div className='options-row'>
						<h4>Background image</h4>
						<input id='background-image-field' name='background-image-field' type='text' defaultValue='background-url' />
					</div>
					<div className='options-row'>
						<h4>Second background image</h4>
						<input id='background-image-field2' name='background-image-field2' type='text' defaultValue='background-url' />
					</div>
				</form>
				<button className='button' onClick={this.handleSlideUpdate}>Update</button>
			</div>
		);
	}

};

export default SlideOptions;