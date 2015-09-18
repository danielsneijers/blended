import React, { Component } from 'react';
import Description from './description';
import CommitList from './commitList';

class Main extends Component {
	render() {
		console.log('main');
		return (
			<div className="container">
		  	<Description />
		    <CommitList />
	  	</div>);
	}
};

export default Main