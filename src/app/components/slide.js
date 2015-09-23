import React, { Component } from 'react/addons';
import Classnames from 'classnames';
import SlideActions from '../actions/slideActions';
// import CommitStore from '../stores/commitStore';
// import CommitListItem from './commitListItem';

const {addons: {CSSTransitionGroup}} = React;

class CommitList extends Component {
	
	// Init
	constructor(props) {
    super(props);
  }

  // Event handlers
  handleDelete(e) {
  	e.preventDefault();
  	SlideActions.deleteSlide(this.props.slideId);
  }

	// Render
	render() {

		let id = this.props.params ? this.props.params.id : this.props.slideId;

		return (
			<CSSTransitionGroup className='slide' transitionName='fadeInUp' transitionAppear={true} component='div'>
				<div className='content'>
					<div>slide {id}</div>
					<button onClick={this.handleDelete.bind(this)}>delete</button>
				</div>
	  	</CSSTransitionGroup>
		);
	}

	// onChange
	_onChange(){
		// this.setState({ commits: CommitStore.getCommits() });
	}
};

export default CommitList;