const db = require('./index.js');

module.exports = {
    find: ({ keyword }) => {
       return db.find().or([{ collections: { $regex: new RegExp(keyword, 'i') } }, { type: { $regex: new RegExp(keyword, 'i') }}])
    },

    count: ({ collection }) => {
        return db.count().or([{ collections: { $regex: new RegExp(collection, 'i') } }, { type: { $regex: new RegExp(collection, 'i') }}])
    }
}
