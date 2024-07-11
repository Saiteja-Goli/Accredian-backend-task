const Router = require('express');
const { referalModel } = require('../models/referalModel');
const referalController = Router();
const emailService = require('../services/emailService');

referalController.post('/', async (req, res) => {
    const { name, email, referedBy, createdAt } = req.body;
    if (!name || !email || !referedBy) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    try {
        const newReferal = new referalModel({
            name,
            email,
            referedBy,
            createdAt
        });

        await newReferal.save();

        await emailService.sendReferalEmail(newReferal);
        res.status(201).json({ "Message": "Email Sent Successfull", newReferal });
    } catch (error) {
        console.log(error);
    }

})

module.exports = { referalController };