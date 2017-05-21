var keystone = require('keystone');

var User = new keystone.List('User');

User.add({
  displayName: { type: String },
  email: { type: keystone.Field.Types.Email, unique: true },
  password: { type: keystone.Field.Types.Password },
  accessAreas: {type: String },
});


User.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

`User.defaultColumns = 'id, displayName, email';`

User.register();