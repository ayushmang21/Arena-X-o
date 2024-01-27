const mongoose = require('mongoose');

const url = "mongodb+srv://ayushman0021:wW4yEHTwB4Pbmriv@cluster0.2fykihf.mongodb.net/arena-x?retryWrites=true&w=majority"

mongoose.connect(url)
.then((result) => {
    console.log('Database Connected..!!');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;