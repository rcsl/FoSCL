var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);
var middleware = require('./middleware');


// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

var routes = {
  views: importRoutes('./views'),
  api: importRoutes('./api'),
  
};

exports = module.exports = function (app) {
  app.get('/', routes.views.index)
  app.get('/add-event', routes.views.addEvent)
  app.post('/add-event', routes.api.event.post);

  //unused routes??
 // app.get('/blog/:category?', routes.views.blog);
  //app.get('/blog/post/:post', routes.views.post);
  //app.get('/gallery', routes.views.gallery);
 // app.all('/contact', routes.views.contact);

    //File Upload Route
  app.get('/api/fileupload/list', keystone.middleware.api, routes.api.fileupload.list);
  app.get('/api/fileupload/:id', keystone.middleware.api, routes.api.fileupload.get);
  app.all('/api/fileupload/:id/update', keystone.middleware.api, routes.api.fileupload.update);
  app.all('/api/fileupload/create', keystone.middleware.api, routes.api.fileupload.create);
  app.get('/api/fileupload/:id/remove', keystone.middleware.api, routes.api.fileupload.remove);


};