# Blended

A simple presentation tool, build to demonstrate the power of React + Flux with IndexedDB.

## Running it

You need to have [Node.js](https://nodejs.org/en/) and NPM installed. With those in place, install Gulp and Jest-cli and Webpack

	$ npm install -g gulp jest-cli webpack

 Then...

    $ npm install
    $ npm start

## Preparing for Deployment

Running a build with minification and optimized assets for deployment.

    $ npm run build

You can inspect the live build in the browser by running `$ gulp serve`, which will spawn a local webserver on port 8080. It will not 'watch' and live-reload, it'll serve your production build served from the 'dist/' folder of the project.

## Testing

Automated unit tests and e2e tests are included, but global installation of Selenium webdriver is necessery for the latter.

	$ npm install -g webdriver-manager
	$ webdriver-manager update

After a succesful install, make sure the webdriver manager is running in the background and an up to date version of the site is running (remember `gulp serve`?) and then run the tests:

	$ webdriver-manager start
	$ gulp serve
	$ npm run e2e

If you're busy (we all are) running unit tests might be a better option. Fire up a terminal of choice and run from the root op the project:

	$ npm test