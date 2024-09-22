const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "username is required"]
    },

    user_Addresses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address"
        }
    ]
    },
    {
        timestamps: true
    }

)

const User = mongoose.model("User", userSchema)

module.exports = User;