const mongoose = require('mongoose')
const { Schema } = mongoose

const messageSchema = new Schema({
    message: {
        type: String
    },
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    senderName: {
        type: String
    },
    receiverName: {
        type: String
    },
    senderRegistrationNumber: {
        type: String
    },
    receiverRegistrationNumber: {
        type: String
    },
    roomId: {
        type : String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // new Date( record.date.getTime() -  ( record.offset * 60000 ) );
        // default: Date( Date.now.getTime() + ( Date.now.getTimezoneOffset() * 60000 ) )
    }
})

module.exports = mongoose.model('message', messageSchema)
