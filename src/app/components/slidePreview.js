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

		let title =  this.props.slide.title;
		let styles = {
		  //backgroundImage: `url(/img/building.jpeg)`,
		};

		return (
				<div className='content' style={styles}>
					<h1 dangerouslySetInnerHTML={{__html: title}}></h1>
					<button onClick={this.handleDelete.bind(this)}>delete</button>
				</div>
		);
	}

	// onChange
	_onChange(){
		// this.setState({ commits: CommitStore.getCommits() });
	}
};

export default CommitList;