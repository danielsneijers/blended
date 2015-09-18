import React, { Component } from 'react';

class CommitListItem extends Component {
	
	// Render
	render() {

		let commit = this.props.commit;

		return (
			<li className='row'>
				<div className='col-xs-2 col-md-2'>
					<h5><img src={commit.authorImg} alt={`image of ${commit.authorName}`} className='img-rounded' style={{width:100 + '%'}} /></h5>
				</div>
				<div className='col-xs-10 col-md-10'>
					<h4>{commit.authorName} <small></small></h4>
					<p>{commit.message}</p>
				</div>
	  	</li>
		);
	}
};

export default CommitListItem;