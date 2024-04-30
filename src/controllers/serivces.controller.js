import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config(
    {
        path: './.env'
    }
);

export const sendServiceEmail = async (req, res) => {
    return res.status(200).send({ message: 'Email has been send successfully' });
    try {
        // console.log(req.body);
        // const accountSid = process.env.ACCOUNT_SID_TWILLIO;
        // const authToken = process.env.AUTH_TOKEN_TWILLIO;
        // const twilioPhoneNumber = process.env.TWILLIO_PHONE_NUMBER;
        // const phoneNumber = `+91${req.body.number}`;
        // const client = twilio(accountSid, authToken);
        // const otp = Math.floor(100000 + Math.random() * 900000);
        // const message = await client.messages.create({
        //     body: `Your one time otp is ${otp}`,
        //     from: twilioPhoneNumber,
        //     to: phoneNumber
        // });
        // console.log(`Message SID: ${message.sid}`);
        // User.findOneAndUpdate
        // return res.status(200).send({ message: 'User Exist' });
    } catch (err) {
        // console.error('Error sending OTP:', err);
        // return res.status(500).send({ error: 'Error sending OTP' });
    }
    };

export const getServices = async(req, res) => {
    return res.status(200).send({ services: [{ id: '1', name: 'Service 1' }, { id: '2', name: 'Service 2' },{ id: '3', name: 'Service 3' },{ id: '4', name: 'Service 4' }] });
    // if() {
    //     const storedOTP = 
    //     if (storedOTP === otp) {
    //     return true; // OTP is valid
    //     }
    // }
    // return false; // OTP is invalid
    };

