const User = require('../models/user.model.js')
const Address = require('../models/address.model.js')

const registerUser = async (req, res) => {
    const {name, street, city, pin_code} = req.body;

    if(!name) {
        return res.status(400).json({message: "name is required"});
    }

    if(!street || !city || !pin_code) {
        return res.status(400).json({message: "Address field are required"});
    }

    try {

        const newUser = new User({name})

        await newUser.save();

        const address = new Address({
            city,
            street,
            pin_code,
            user: newUser._id
        })

        await address.save();

        newUser.user_Addresses.push(address._id)

        await newUser.save();

        res.status(201).json({ message: 'User and address registered successfully' });
        
    } catch (error) {
        res.status(500).json({message: "Error in saving registerUser", error})
    }
    
}

module.exports = registerUser