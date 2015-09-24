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
    	slideId: this.props.params.id,
    	slide: this.props.slide,
    	dirty: false
    }
  }
  componentWillReceiveProps(nextProps) {
  	if(!this.state.dirty)
  		this.setState({ slide: nextProps.slide });
  }

  // Helpers
  setDirtyState(e) {
  	this.setState({ dirty: true });
  }
  saveSlideContent(e) {
  	console.log(e.currentTarget);
  }


	// Render
	render() {

		let title =  this.state.slide.title;
		let styles = {
		  backgroundImage: `url(/img/bridge.jpeg)`,
		};

		return (
			<CSSTransitionGroup transitionName='fadeIn' transitionAppear={true} component='div'>
				<div className='slide-container'>
					<div id="active-slide" className="slide">
						<div className='content' style={styles}>
							<h1 contentEditable='true' onFocus={this.setDirtyState.bind(this)} onBlur={this.saveSlideContent} >{title}</h1>
						</div>
					</div>
				</div>
	  	</CSSTransitionGroup>
		);
	}

};

export default CommitList;