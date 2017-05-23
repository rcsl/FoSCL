var keystone = require('keystone');
var Event = keystone.list('Event');


module.exports = function (req, res) {
  if (!req.body.name || !req.body.startTime || !req.body.endTime) {
    return res.send("error: Complete the form and try again");
  }
 var newEvent = new Event(req.body);
 Event.updateItem(newEvent, req.body, function(err){
   if(err)
     res.locals.saveError = true;
   res.render('addEvent');
 });
};

