import React, { Component } from 'react/addons';
import Classnames from 'classnames';
import SlideActions from '../actions/slideActions';
import SlideStore from '../stores/slideStore';
// import CommitStore from '../stores/commitStore';
// import CommitListItem from './commitListItem';

const {addons: {CSSTransitionGroup}} = React;

class CommitList extends Component {

	// Component lifecycle
	constructor(props) {
    super(props);
  }

  // Event handlers
  handleDelete(e) {
  	e.preventDefault();
  	SlideActions.deleteSlide(this.props.slide.id);
  }

	// Render
	render() {

		let slide = this.props.slide,
				title =  this.props.slide.title;

		let styles = {
			textAlign: slide.textAlign,
			color: slide.color,
			backgroundColor: slide.backgroundColor,
		  backgroundImage: slide.backgroundUrl,
		};

		return (
			<CSSTransitionGroup className="slide-preview" transitionName='fadeIn' transitionAppear={true} component='div'>
				<div className='content' style={styles}>
					<button className='button button-triangle button-danger' onClick={this.handleDelete.bind(this)}>
						<img className='icon' src='img/icon-delete.svg' alt='Delete icon' />
					</button>
					<h1 dangerouslySetInnerHTML={{__html: title}} ></h1>
				</div>
			</CSSTransitionGroup>
		);
	}

};

export default CommitList;