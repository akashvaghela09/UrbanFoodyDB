const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
    return new mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
}

module.exports = {connect}