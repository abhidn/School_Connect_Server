const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    book_url: {
        type: String,
        required: 'URL can\'t be empty',
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },
    published_date: {
        type: Date
    },
    publisher: {
        type: String,

    },
    updated_date:
    {
        type: Date,
        default: Date.now
    }

})

userSchema.path('book_url').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

const User = mongoose.model('USER', userSchema);
module.exports = User;