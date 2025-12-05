const nodemailer = require("nodemailer")
const path = require("path")
require('dotenv').config({ path: path.join(__dirname, '.env') })

async function SendEmail(toAddr , otp) {
    console.log('Email Config:', process.env.EMAIL_ID, process.env.PASSWORD ? '****' : 'NOT SET')
    try{
        // Check if using Gmail or other email service
        const isGmail = process.env.EMAIL_ID?.includes('@gmail.com');
        
        let transportConfig;
        
        if (isGmail) {
            // Gmail configuration
            transportConfig = {
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_ID, 
                    pass: process.env.PASSWORD
                }
            };
        } else {
            // Generic SMTP configuration for university/other emails
            transportConfig = {
                host: process.env.SMTP_HOST || "smtp.gmail.com",
                port: parseInt(process.env.SMTP_PORT || "587"),
                secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
                auth: {
                    user: process.env.EMAIL_ID, 
                    pass: process.env.PASSWORD
                },
                tls: {
                    rejectUnauthorized: false // For development only
                }
            };
        }
        
        const transporter = nodemailer.createTransport(transportConfig);

        const mailObject = {
            from : process.env.EMAIL_ID,
            to : toAddr , 
            subject  : "Aadukalam - OTP Verification",
            text: `Your OTP for Aadukalam verification is: ${otp}\n\nThis OTP will expire in 10 minutes.\n\nIf you didn't request this, please ignore this email.`
        }

        const status = await transporter.sendMail(mailObject);
        return 1;
    }
    catch (error){
        console.log(error)
        return 0;
    }
}

// async function run() {
//     const status = await SendEmail('220701234@rajalakshmi.edu.in','Naa than da leo... leo das')
//     console.log(status)
// }
// run()

module.exports = {
    SendEmail
}