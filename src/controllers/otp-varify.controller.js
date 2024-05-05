import { User} from "../models/user.model.js"
import { Otp } from "../models/otp.model.js"
import mongoose from "mongoose";
import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config(
    {
        path: './.env'
    }
);

export const sendOTP = async (req, res) => {
    try {
        const accountSid = process.env.ACCOUNT_SID_TWILLIO;
        const authToken = process.env.AUTH_TOKEN_TWILLIO;
        const twilioPhoneNumber = process.env.TWILLIO_PHONE_NUMBER;
        const phoneNumber = `+91${req.body.number}`;
        const client = twilio(accountSid, authToken);
        const otp = Math.floor(100000 + Math.random() * 900000);
        console.log(phoneNumber, twilioPhoneNumber);
        const message = await client.messages.create({
            body: `Your one time otp is ${otp}`,
            from: twilioPhoneNumber,
            to: phoneNumber
        });
        const otpData = await Otp.findOne({ number: req.body.number });
        if (otpData) {
            await Otp.findOneAndUpdate({ number: req.body.number }, { otp: otp, count: otpData.count + 1 });
        }
        else{
            await Otp.create({ number: req.body.number, otp: otp, count: 1 });
        }
        console.log(`Message SID: ${message.sid}`);
        return res.status(200).send({ message: 'OTP Send' });
    }
    catch (err) {
        console.error('Error sending OTP:', err);
    }
    return res.status(400).send({ error: 'Error sending OTP' });
    };

export const validateOTP = async(req, res) => {
    try {
        const {number, otp} = req.body;
        console.log(number, otp);
        const otpData = await Otp.findOne({ number: number });
        console.log(otpData);
        if (!otpData) {
            return res.status(404).send({ error: 'Please renter your number' });
        }
        if (Number(otp) !== Number(otpData.otp)) {
            return res.status(400).send({ error: 'Invalid OTP' });
        }
        await Otp.findOneAndUpdate({ number: number }, { otp: '', count: 0 });
        const userData = await User.findOne({ number: number });
        if (!userData) {
            if (Number(number) == Number(process.env.ADMIN_NUMBER)) {
                const userData = await User.create({ number: number, admin: true});
                return res.status(200).send({ error: 'User not found', userData: userData});
            }
            else{
                const userData = await User.create({ number: number});
                return res.status(200).send({ error: 'User not found', userData: userData});
            }
        }
        return res.status(200).send({ message: 'User Exist', userData: userData });
    } catch (error) {
        console.error('Error validating OTP:', error);
    }
        return res.status(400).send({ error: 'Error validating OTP' });
    };


export const reSendOTP = async(req, res) => {
    return res.status(200).send({ message: 'User Exist' });
    // if() {
    //     const storedOTP = 
    //     if (storedOTP === otp) {
    //     return true; // OTP is valid
    //     }
    // }
    // return false; // OTP is invalid
    };

export const updateUser = async(req, res) => {
        const { firstName, lastName, number, email, userId } = req.body;
        console.log(req.body);
        console.log(firstName, lastName, number, email, number, userId)
        try {
            const userData = await User.findOne({ number: number, _id: userId});
            if (!userData) {
                return res.status(404).send({ error: 'User not found' });
            }
            const updatedUser = await User.findOneAndUpdate(
                { _id: userId },
                { firstName: firstName, lastName: lastName, email: email },
                { new: true } );
            return res.status(200).send({ message: 'User updated successfully', userData: updatedUser});
        }
        catch (err) {
            console.error('Error updating user:', err);
        }
        return res.status(400).send({ error: 'Error updating user' });
}

export const getUserData = async(req, res) => {
    try {
        const { number} = req.body;
        console.log(req.body);
        const users = await User.findOne({ number: number});
        return res.status(200).send({ userData: users });
    } catch (error) {
        console.error('Error getting user data:', error);
    }
    return res.status(200).send({ message: 'User Exist' });
    }
