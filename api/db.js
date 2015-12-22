import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/tournoir');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DB Tournoir connection open');
});

export default db;