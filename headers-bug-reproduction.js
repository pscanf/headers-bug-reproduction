if (Meteor.isServer) {
  Meteor.startup(function () {

	// Add header-setting middleware to connectHandlers
    WebApp.connectHandlers.use(function (req, res, next) {
      res.setHeader('Test-Header-0', [
        'value-0',
        'value-1',
        'value-2'
      ]);
      next();
    });

	// Even using rawConnectHandlers, no success
    WebApp.rawConnectHandlers.use(function (req, res, next) {
      res.setHeader('Test-Header-1', [
        'value-0',
        'value-1',
        'value-2'
      ]);
      next();
    });

  });
}
