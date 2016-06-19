module.exports = function(app) {
  require('./FirstDirective')(app);
  require('./IsolateDirective')(app);
};
