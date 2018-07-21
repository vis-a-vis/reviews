const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost:3002',
  user: 'root',
  password: '',
  database: 'reviews_list',
});


connection.query((err) => {
  if (err) {
    console.error('problem connecting to mysql', err);
    return;
  }
  console.log('connected to mysql, locked and loaded!');
});

module.exports = connection;

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/3002');

// const userSchema = new Schema ({
//   _id: Number,
//   name: String,
// })

// const reviewSchema = new Schema({
//   _Id: Number,
//   postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
//   createdAt: Date,
//   Message: String,
// })

// const hostSchema = new Schema({
//   _Id: Number,
//   Reply: String,
// })

// let User = mongoose.model('User', userSchema)
// let Review = mongoose.model('Review', reviewSchema)
// let Host = mongoose.model('Host', hostSchema)


// Review.findOne({_id: 123})
// .populate('postedBy')
// .exec(function(err, review) {
//   if (err) {
//     console.error(err)
//   } else {
//     //do something with review
//   }
// });
