const mongoose = require('mongoose');

const addressSchema  = new mongoose.Schema({
    
    city: {
        type: String,
        required: [true, "city is required"]
    },
    street: {
        type: String,
        required: [true, "street is required"]
    },
    pin_code: {
        type: Number,
        required: [true, "pin_code is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    },
    {
        timestamps: true
    }

)

const Address = mongoose.model("Address", addressSchema)

module.exports = Address;