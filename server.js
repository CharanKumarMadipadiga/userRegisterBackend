const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({path: './.env'})
const connection = require('./db/index.js')
const logger = require('./middlewares/logger.middleware.js')
const userRoute = require('./routes/registerUser.js')

const app = express()

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(logger)


//routes
app.use("/user/api", userRoute)


connection()
.then(() => {
    app.on("error", (err) => {
        console.log("Error", err)
        throw err
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at localhost:${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGODB Connection failed !!!", err)
})


