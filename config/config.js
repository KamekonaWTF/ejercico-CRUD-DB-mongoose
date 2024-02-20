const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Base de datos conectada con exito')
        } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnection