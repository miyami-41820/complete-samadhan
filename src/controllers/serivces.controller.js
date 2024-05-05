import twilio from 'twilio';
import { ServiceList } from '../models/services-list.model.js';
import nodemailer from 'nodemailer';
import { Service } from '../models/services.models.js';
import { User } from '../models/user.model.js';

export const sendServiceEmail = async (req, res) => {
    try {
        const {userId, serviceId, userName, userEmail, userNumber, description} = req.body;
        console.log(userId, serviceId)
        const service = await ServiceList.findOne({ _id: serviceId });
        const user = await User.findOne({ _id: userId});
        console.log(service)
        console.log(user)
        const {email} = user;
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "ritik.katiyar@e2enetworks.com",
                pass: "vmox qukr dglo kvib",
            },
            });
        console.log(transporter)
        const mailOptions = {
            from: 'ritik.katiyar@e2enetworks.com',
            to: email,
            subject: 'Test Email',
            text: 'Hello from Nodemailer!'
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error occurred:', error.message);
                return;
            }
            console.log('Email sent successfully!');
            console.log('Message ID:', info.messageId);
        });
        const selfMailOptions = {
            from: 'ritik.katiyar@e2enetworks.com',
            to: 'ritik.katiyar@e2enetworks.com',
            subject: 'Test Email',
            text: 'Hello from Nodemailer!'
        };
        transporter.sendMail(selfMailOptions, (error, info) => {
            if (error) {
                console.log('Error occurred:', error.message);
                return;
            }
            console.log('Email sent successfully!');
            console.log('Message ID:', info.messageId);
        });
        await Service.create({ userId: user._id, serviceId: service._id, status: 'Submitted', requestUser: userName, requestNumber: userNumber, requestEmail: userEmail, description: description});
        return res.status(200).send({ message: 'Service Request has been submitted successfully' });
        } catch (err) {
            console.error('Requested service failed:', err);
            return res.status(500).send({ error: 'Requested service failed' });
        }
    };

export const getServices = async(req, res) => {
    try {
        const services = await ServiceList.find({});
        return res.status(200).send({ services });
    } catch (error) {
        console.error('Error getting services:', error);
        return res.status(400).send({ error: 'Error getting services' });
    }
    };


export const updateServiceRequest = async(req, res) => {
    const { serviceId, status, userId } = req.body;
    try {
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        if (!user.admin){
            return res.status(401).send({ error: 'Unauthorized' });
        }
        await Service.updateOne({ _id: serviceId }, { status: status });
        } 
    catch (error) {
            console.error('Error updating service request:', error);
            return res.status(400).send({ error: 'Error updating service request' });
        }
        return res.status(200).send({ message: 'Service Request has been updated successfully' });
    } 

export const getServicesAdmin = async(req, res) => {
    try {
        const services = await Service.find({}).populate('userId').populate('serviceId');
        return res.status(200).send({requests: services });
    } catch (error) {
        console.error('Error getting services:', error);
        return res.status(400).send({ error: 'Error getting services' });
    }
}

export const getServicesUser = async(req, res) => {
    const { userId } = req.body;
    console.log(userId)
    try {
        const services = await Service.find({ userId: userId }).populate('userId').populate('serviceId');
        console.log(services)
        return res.status(200).send({ requests: services});
    } catch (error) {
        console.error('Error getting services:', error);
        return res.status(400).send({ error: 'Error getting services' });
    }
}
