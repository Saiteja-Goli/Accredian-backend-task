const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host:"smtp.gmail.com",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendReferalEmail = async (referal) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: referal.email,
        subject: 'Referal Confirmation',
        text: `Hello ${referal.name},\n\nYou have been referred by ${referal.referedBy}. We will contact you soon.\n\nThank you!`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};

module.exports = {
    sendReferalEmail,
};

