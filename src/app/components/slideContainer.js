import React, { Component } from 'react/addons';
import Classnames from 'classnames';
import SlideActions from '../actions/slideActions';
import SlideStore from '../stores/slideStore';

const {addons: {CSSTransitionGroup}} = React;

class CommitList extends Component {

	// Component lifecycle
	constructor(props) {
    super(props);
    this.state = {
    	slide: {},
    	dirty: false
    }
  }
  componentWillReceiveProps(nextProps) {
  	// if(!this.state.dirty && allSlides in nextProps)
  	// 	this.setCurrentSlide(this.props.params.id, nextProps.allSlides);
  }
  componentDidMount() {
  	console.log('did mount');
  	//this.setCurrentSlide(this.props.params.id);
	}
	componentWillUnmount() {
		SlideStore.removeChangeListener(this._onChange.bind(this));
	}

  // Helpers
  setCurrentSlide(id, allSlides) {
  	console.log('set', allSlides);
  	// allSlides.forEach((slide, index) => {
  	// 	console.log('hoi');
  	// 	console.log(slide, index);
  	// });
  }
  setDirtyState(e) {
  	this.setState({ dirty: true });
  }
  saveSlideContent(property, e) {
  	let optimisticUpdatedSlide = this.state.slide;
  	optimisticUpdatedSlide[property] = e.currentTarget.innerHTML;
  	this.setState({
  		slide: optimisticUpdatedSlide,
  		dirty: false
  	})
  	SlideActions.updateSlide(optimisticUpdatedSlide);
  }


	// Render
	render() {

		// console.log(this.state.slide);

		//let slide = this.state.slide || {};
		//let title = slide.title;
		let title = 'heyhoi';
		let styles = {
		  backgroundImage: `url(/img/bridge.jpeg)`,
		};

		return (
			<CSSTransitionGroup transitionName='fadeIn' transitionAppear={true} component='div'>
				<div className='slide-container'>
					<div id="active-slide" className="slide">
						<div className='content' style={styles}>
							<h1 contentEditable='true'
								onFocus={this.setDirtyState.bind(this)}
								onBlur={this.saveSlideContent.bind(this, 'title')}>
									{title}
							</h1>
						</div>
					</div>
				</div>
	  	</CSSTransitionGroup>
		);
	}

	_onChange() {
		this.setState({ slide: SlideStore.getSlide(this.props.params.id) });
	}

};

export default CommitList;