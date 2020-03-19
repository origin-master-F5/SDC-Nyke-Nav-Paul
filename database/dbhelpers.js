const db = require('./index.js');

module.exports = {
    find: ({ keyword }) => {
       return db.find().or([{ item: { $regex: new RegExp(keyword, 'i') } }, { type: { $regex: new RegExp(keyword, 'i') }}])
    }
}
