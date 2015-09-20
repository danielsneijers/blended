import React from 'react';
import Router from 'react-router';
import Routes from './routes';

Router.run(Routes, (Root, state) => {
  React.render(<Root {...state} />, document.getElementById('app'));
});