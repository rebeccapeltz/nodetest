module.exports = function(app) {
  require('./ListController')(app);
  require('./EditController')(app);
};
