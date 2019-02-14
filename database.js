const mongoose = require('mongoose');

const initDB = () => {

  mongoose.connect(
    'mongodb://bla:blabla1@ds021984.mlab.com:21984/blablabla',
    { useNewUrlParser: true }
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

}

module.exports = initDB;