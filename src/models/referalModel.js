const mongoose = require('mongoose');

const referalSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    referedBy: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const referalModel = mongoose.model('Referal', referalSchema);
module.exports = { referalModel }