const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_connect, { useNewUrlParser: true })
        .then(() => console.log('Connected'))
        .catch(err => console.log(err));
}
module.exports=connectToDb;