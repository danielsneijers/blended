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
		this.state = {
    	slideId: this.props.slide.id,
    	slide: this.props.slide,
    }
  }
  componentWillReceiveProps(nextProps) {
		this.setState({ slide: nextProps.slide });
  }

  // Event handlers
  handleDelete(e) {
  	e.preventDefault();
  	SlideActions.deleteSlide(this.props.slideId);
  }

	// Render
	render() {


		let title =  this.state.slide.title;
		let styles = {
		  backgroundImage: `url(/img/building.jpeg)`,
		};

		return (
				<div className='content' style={styles}>
					<div>{title}</div>
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