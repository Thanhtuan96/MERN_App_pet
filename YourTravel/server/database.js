const mongoose = require('mongoose');

class Database {
    constructor() {
        this.onConnect();
    }

    onConnect = () => {
        mongoose
            .connect('mongodb://localhost:27017/yelp-camp')
            .then(() => {
                console.log('database connected');
            })
            .catch((err) => {
                console.log(err);
            });
    };
}

module.exports = new Database();
