import React from 'react';
import { Router, DefaultRoute, Route } from 'react-router';
import Main from './components/main';
import PageContent from './components/pageContent';


export default (
	<Route path="/" handler={Main}>
    <DefaultRoute handler={PageContent} />
		<Route path="/slide/:id" handler={PageContent} />
  </Route>
);