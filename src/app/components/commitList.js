import React, { Component } from 'react';
import Classnames from 'classnames';
import CommitActions from '../actions/commitActions';
import CommitStore from '../stores/commitStore';
import CommitListItem from './commitListItem';

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
		CommitStore.addChangeListener(this._onChange.bind(this));
	}
	componentWillUnmount() {
		CommitStore.removeChangeListener(this._onChange.bind(this));
	}

	// Event handlers
	handleSubmit(e) {
		e.preventDefault();
		CommitActions.fetch(this.state.inputValue);
	}
	handleChange(e) {
		this.setState({ inputValue: e.target.value });
	}

	// Render
	render() {

		let commits = this.state.commits,
				listItems = [],
				warningClasses;

		// Setup list of commits
		for (let commitObject of commits){
			let itemData,
					listItem;
			itemData = {
				authorName: commitObject.author.login,
				authorImg: commitObject.author.avatar_url,
				authorLink: commitObject.author.html_url,
				url: commitObject.commit.message,
				date: commitObject.commit.committer.date,
				message: commitObject.commit.message
			};
			listItem = (<CommitListItem key={commitObject.sha} commit={itemData} />); 
			listItems.push(listItem);
		}

		// Dynamic classes
		warningClasses = Classnames('alert', 'alert-danger', 'alert-dismissible', {
			'hidden': false
		});

		return (
			<div className='row'>
				<div className='col-md-6 col-md-offset-3'>
					<form onSubmit={this.handleSubmit.bind(this)}>
				    <div className="input-group">
					    <input type='text' className='form-control' placeholder='magneticio/vamp' value={this.state.value} defaultValue='magneticio/vamp' onChange={this.handleChange.bind(this)} />
				      <span className="input-group-btn">
					  		<button  type='submit' className='btn btn-default'>Find commits</button>			  
				      </span>
				    </div>
					</form>
					<br/>
					<div className={warningClasses} role="alert">
					  <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					  <strong>Warning!</strong> Better check yourself, you're not looking too good.
					</div>
					<hr/>
					<ul className='list-unstyled'>
						{listItems}
					</ul>	      		
		  	</div>
	  	</div>
		);
	}

	// onChange
	_onChange(){
		this.setState({ commits: CommitStore.getCommits() });
	}
};

export default CommitList;