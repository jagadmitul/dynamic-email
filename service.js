require('dotenv').config();
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const Mustache = require('mustache');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());

app.post('/send-email', async (req, res) => {
    const { templateName, data } = req.body;

    // Load the email template
    const template = fs.readFileSync(path.join(__dirname, `./templates/${templateName}.html`), 'utf8');

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
        // to: 'dixeetdhaduk@gmail.com',
        to: 'freelancing771@gmail.com',
        subject: 'Order Confirmation - ' + data?.orderNo,
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
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
