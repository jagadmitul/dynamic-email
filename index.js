require('dotenv').config();
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const Mustache = require('mustache');

module.exports = async (req, res) => {
    // Load the JSON data
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));

    // Load the email template
    const template = fs.readFileSync(path.join(__dirname, 'order_confirmation_1.html'), 'utf8');

    // Generate the email content using Mustache
    const emailContent = Mustache.render(template, data);

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Setup email data
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: data.shipping_address.email,
        subject: 'Order Confirmation - ' + data.order_no,
        html: emailContent
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Failed to send message');
    }
};
