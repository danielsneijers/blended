import React, { Component } from 'react/addons';
import Classnames from 'classnames';
// import CommitActions from '../actions/commitActions';
// import CommitStore from '../stores/commitStore';
// import CommitListItem from './commitListItem';

const {addons: {CSSTransitionGroup}} = React;

class CommitList extends Component {
	
	// Init
	constructor(props) {
    super(props);
    this.state = {
    	commits: [],
    	inputValue: 'magneticio/vamp'
    };
  }

  // Component lifecycle
	componentWillMount() {
		console.log('slide');
		//CommitStore.addChangeListener(this._onChange.bind(this));
	}
	componentWillUnmount() {
		//CommitStore.removeChangeListener(this._onChange.bind(this));
	}

	// Event handlers
	handleSubmit(e) {
		// e.preventDefault();
		// CommitActions.fetch(this.state.inputValue);
	}
	handleChange(e) {
		// this.setState({ inputValue: e.target.value });
	}

	// Render
	render() {

		let id = this.props.params ? this.props.params.id : this.props.slideId;

		return (
			<CSSTransitionGroup className='slide' transitionName='fadeInUp' transitionAppear={true}>
				<div>slide {id}</div>
	  	</CSSTransitionGroup>
		);
	}

	// onChange
	_onChange(){
		// this.setState({ commits: CommitStore.getCommits() });
	}
};

export default CommitList;