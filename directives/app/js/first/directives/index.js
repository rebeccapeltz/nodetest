module.exports = function(app) {
  require('./FirstDirective')(app);
  require('./IsolateDirective')(app);
  require('./IsolateDirective2')(app);
};
