const mongoose = require('mongoose')
const { Schema } = mongoose

const markSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    exam: {
        type: String,
        required:true
    },
    marks: {
        type: Number,
        default: 0
    },
    totalMarks: {
        type: Number,
        default: 100
    },
    classroom: {
        type:String
    },
    semester: {
        type:Number
    },
    division: {
        type:String
    }
})

module.exports = mongoose.model('mark', markSchema)
