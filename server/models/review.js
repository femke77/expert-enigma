const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const reviewSchema = new Schema({
    description: {
        type: String,
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    campaignId: {
        type: Schema.Types.ObjectId,
        ref: 'Campaign',
    },
    createdAt: {
        type: Date,
        default: Date.now,
         get: (timestamp) => dateFormat(timestamp)
    },
});



module.exports = reviewSchema;