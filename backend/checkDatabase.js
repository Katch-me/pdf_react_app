const mongoose = require('mongoose');
const User = require('./models/user');  // Make sure the path is correct

mongoose.connect('mongodb://localhost:27017/myDatabase', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => {
  console.log('Connected to MongoDB');
  return User.find();
})
.then(users => {
  console.log('Users:', users);
  mongoose.connection.close();
})
.catch(err => {
  console.error('Error:', err);
});
