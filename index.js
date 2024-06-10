require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
const Mustache = require('mustache');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

app.post('/send-email', async (req, res) => {
    const { templateName, data } = req.body;

    // Load the email template
    const template = fs.readFileSync(path.join(__dirname, `./templates/${templateName}.html`), 'utf8');

    // Generate the email content using Mustache
    const emailContent = Mustache.render(template, data);

    const client = new SESClient({
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET
        },
        region: process.env.S3_REGION,
    })

    const to = ['freelancing771@gmail.com']
    const params = {
        Destination: {
            ToAddresses: to,
        },
        Message: {
            Body: {
                Html: { Data: emailContent },
                Text: { Data: 'This is the text body of the email.' },
            },
            Subject: { Data: 'Order Confirmation - ' + data?.orderNo },
        },
        Source: process.env.EMAIL_USER,
    };

    try {
        const command = new SendEmailCommand(params);
        await client.send(command);
        res.status(200).send('Message sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send message');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
