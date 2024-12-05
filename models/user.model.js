const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const jwt= require('jsonwebtoken');
const newUserSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String, // Corrected to 'String'
            required: true
        },
        lastname: {
            type: String, // Corrected to 'String'
            default: '',  // Optional: Adding a default value if not provided
        }
    },
    email: {
        type: String, // Corrected to 'String'
        required: true,
        unique: true
    },
    password: {
        type: String, // Corrected to 'String'
        minlength: [8, 'Password must be at least 8 characters long'],
        required: true
    },
    socketid:{
        type:String
    }
});
newUserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

newUserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

newUserSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('NewUser', newUserSchema, 'new_users');


module.exports = userModel;