// const db = require('./index.js');

// module.exports = {
//     find: ({ keyword }) => {
//         console.log('this be the word ', keyword)
//         return db.find().or([{ collections: { $regex: new RegExp(keyword, 'i') } }, { type: { $regex: new RegExp(keyword, 'i') }}])
//         // return db.find({collections: keyword, type: keyword})
//     }
// }
