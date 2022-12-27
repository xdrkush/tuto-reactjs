const mongoose = require('mongoose');

class Connection {

    databaseConnection() {
        try {
            require('dotenv').config()
            const connect = mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            if(!connect) console.log('connection failed');
            return connect;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Connection;