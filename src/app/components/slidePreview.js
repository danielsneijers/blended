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
    	slideId: this.props.slideId ? this.props.slideId : this.props.params.id
    }
  }
  componentWillMount(){
  	//SlideStore.getSlide(this.state.slideId);
  }

  // Event handlers
  handleDelete(e) {
  	e.preventDefault();
  	SlideActions.deleteSlide(this.props.slideId);
  }

	// Render
	render() {


		let id = this.props.params ? this.props.params.id : this.props.slideId;
		let styles = {
		  backgroundImage: `url(/img/building.jpeg)`,
		};

		return (
				<div className='content' style={styles}>
					<div>slide {id}</div>
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