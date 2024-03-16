const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, 'Please enter name'],
        trim: true,
        maxLength: [100, 'name cannot exceed 100 characters']
    },
    lname: {
        type: String,
        required: [true, 'Please enter name'],
        trim: true,
        maxLength: [100, 'name cannot exceed 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter email']
    },
    contact: {
        type: Number,
        required: [true, 'Please enter contact number']
    },
    dcId: {
        type: String,    
        default: "None"
    },
    cbzndc: {
        type: String,
        required: [true, 'Please select state'],
        enum: {
            values: [
                'True',
                'False',
            ],
            message: 'Please select'
        }
    },
    givelabs: {
        type: String,
        required: [true, 'Please select state'],
        enum: {
            values: [
                'True',
                'False',
            ],
            message: 'Please select'
        }
    },
   
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Entry', entrySchema);