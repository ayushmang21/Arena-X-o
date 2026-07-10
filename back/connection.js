const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGODB_URI;

if (!url) {
    throw new Error('MONGODB_URI is required to connect to the database.');
}

mongoose.connect(url)
.then((result) => {
    console.log('Database Connected..!!');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;
