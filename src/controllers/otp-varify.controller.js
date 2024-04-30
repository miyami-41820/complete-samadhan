import { User} from "../models/user.model.js"
import mongoose from "mongoose";
import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config(
    {
        path: './.env'
    }
);

export const sendOTP = async (req, res) => {
    return res.status(200).send({ message: 'User Exist' });
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

export const validateOTP = async(req, res) => {
    return res.status(200).send({ message: 'User Exist' });
    // if() {
    //     const storedOTP = 
    //     if (storedOTP === otp) {
    //     return true; // OTP is valid
    //     }
    // }
    // return false; // OTP is invalid
    };

