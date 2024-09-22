const mongoose = require('mongoose');


const connection = async () => {
    try {
        const connectionObj = await mongoose.connect(`${process.env.MONGO_URL} `)
            console.log(`MONGODB Connected!! DB HOST:${connectionObj.connection.host}`)
            
    } catch (error) {
        console.log("MONGO Error", error)
        process.exit(1);
    }
}


module.exports = connection;