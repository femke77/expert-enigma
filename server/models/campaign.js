const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reviewSchema = require('./review');

const campaignSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    image:  {
        data: {
            type: String, // Store the image data as a string
            required: true,
        },
        contentType: String,
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    targetAmount: {
        type: Number,
    },
    currentAmount: {
        type: Number,
        default: 0,
    },
    endDate: {
        type: Date,
    },
    donations: [{
        type: Schema.Types.ObjectId,
        ref: 'Campaign'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    reviews: [reviewSchema]
});


const Campaign = model('Campaign', campaignSchema);

module.exports = Campaign;