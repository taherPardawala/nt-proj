let db = {};
let mongodb = require('mongodb');
let MongoClient = require('mongodb').MongoClient;


db.connect = async () => {
    try {
        let connection = await MongoClient.connect(`mongodb://localhost:27017/nt-proj`);
        db.accounts = connection.collection('accounts');
        db.users = connection.collection('users');
        //rest of the collections go here
        db.accounts.ensureIndex({ "username": 1 }, { unique: true });
        //unique id field always so as to avoid multiple same accounts
        delete db.connect;
        return db;
    } catch (e) {
        console.log(e);
        return;
    }
}

module.exports = db;