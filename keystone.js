var keystone = require('keystone');

keystone.init({
  'cookie secret': 'se6Ytyyt-56-9Dre/0901',
  'name': 'Friends of sonning Common Library',
  'user model': 'User',
   views: 'templates/views',
  'view engine': 'pug',
  'auto update': true,
  'auth': true,
});

keystone.import('models');
keystone.set('routes', require('./routes'))

keystone.start();