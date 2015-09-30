import React, { Component } from 'react/addons';
import Classnames from 'classnames';
import SlideActions from '../actions/slideActions';
import SlideStore from '../stores/slideStore';
import TitleSlide from './slide-types/titleSlide';
import SingleSlide from './slide-types/singleSlide';
import SplitSlide from './slide-types/splitSlide';

class CommitList extends Component {

	// Component lifecycle
	constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Event handlers
  handleDelete(e) {
  	e.preventDefault();
  	SlideActions.deleteSlide(this.props.slide.id);
  }

	// Render
	render() {

		let slide;

		switch(this.props.slide.type){
			case 'title':
				slide = (<TitleSlide slideContent={this.props.slide} saveSlideContent={this.saveSlideContent} editable={false} />);
				break;
			case 'single':
				slide = (<SingleSlide slideContent={this.props.slide} saveSlideContent={this.saveSlideContent} editable={false} />);
				break;
			case 'split':
				slide = (<SplitSlide slideContent={this.props.slide} saveSlideContent={this.saveSlideContent} editable={false} />);
				break;
		}

		return (
			<div className="slide-preview">
					<button className='button button-triangle button-danger' onClick={this.handleDelete}>
						<img className='icon' src='/img/icon-delete.svg' alt='Delete icon' />
					</button>
					{slide}
			</div>
		);
	}

};

export default CommitList;