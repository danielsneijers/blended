exports.config = {

	specs: [
		'./e2e/app.spec.js'
	],

	baseUrl: 'http://localhost:8080',
	seleniumAddress: 'http://localhost:4444/wd/hub',

	onPrepare: function() {
    browser.ignoreSynchronization = true;
	},

	maxSessions: 1,

	multiCapabilities: [
		{ 'browserName': 'firefox' },
		{ 'browserName': 'chrome' }
	]
};