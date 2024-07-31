import { ServiceList } from '../models/services-list.model.js';
import nodemailer from 'nodemailer';
import { Service } from '../models/services.models.js';
import { User } from '../models/user.model.js';
import { Order } from '../models/order.model.js';
import Razorpay from 'razorpay';
import {validatePaymentVerification, validateWebhookSignature} from '../../node_modules/razorpay/dist/utils/razorpay-utils.js'

export const Checkout = async (req, res) => {
    const {userId, serviceId, selectedService, userName, userNumber, userEmail, description} = req.body;
    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const options = {
        amount: selectedService?.price * 100,
        currency: 'INR',
    };
    try {
        const response = await instance.orders.create(options);
        let orderObj = await Order.create({userId: userId, status: 'Instantiate', order_id: response.id})
        let service_obj = await Service.create({ userId: userId, orderId: orderObj._id, serviceId: serviceId, status: 'Submitted', requestUser: userName, requestNumber: userNumber, requestEmail: userEmail, description: description});
        return res.status(200).send({ status: 'order created successfully', order: response, razorpay_key: process.env.RAZORPAY_KEY_ID, selectedServiceId: service_obj._id });
    } catch (error) {
        console.error('Error creating order:', error);
        await Order.create({userId: userId, status: 'Failed', order_id: ""})
        return res.status(400).send({ error: 'Error creating order' });
    }
}

export const sendServiceEmail = async (req, res) => {
    try {
        const {userId, serviceId, userEmail, razorpay_order_id, razorpay_payment_id, razorpay_signature, selectedServiceId} = req.body;
        let serviceObj = await Service.findOne({ _id: selectedServiceId});
        let oderObj = await Order.findOne({order_id: razorpay_order_id, userId: userId})
        if ( !serviceObj || !oderObj){
            return res.status(400).send({ error: 'Requested service failed' });
        }
        let value = validatePaymentVerification({"order_id": razorpay_order_id, "payment_id": razorpay_payment_id }, razorpay_signature,  process.env.RAZORPAY_KEY_SECRET);
        if (value){
            await Order.updateOne({ order_id: razorpay_order_id, userId: userId}, { status: "Done", signature: razorpay_signature, payment_id: razorpay_payment_id });
            userObj = await User.findOne({_id: userId})
            const email = userEmail;
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: "completesamadhaan7@gmail.com",
                    pass: "pmev wovq bmkb ezto",
                },
                });
            const mailOptions = {
                from: 'completesamadhaan7@gmail.com',
                to: email,
                subject: '[COMPLETE SAMAADHAN] Requested service details',
                text: `Hi  ${userObj.firstName}
                Your request service details are -

                Requested Service - ${serviceObj.ServiceList.name},
                payment ID - ${razorpay_payment_id},

                We will contact you through your registered mobile number - ${userObj.number}.
                
                Thank You!
                `
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error occurred:', error.message);
                }
            });
            const selfMailOptions = {
                from: 'completesamadhaan7@gmail.com',
                to: 'completesamadhaan7@gmail.com',
                subject: '[COMPLETE SAMAADHAN] User Requested a service',
                text: `Hi admin
                a user has requested a service whose details are - 

                Requested Service - ${serviceObj.ServiceList.name},
                Requested User - ${userObj.name},
                User Contact Number - ${userObj.number},
                payment ID - ${razorpay_payment_id},
                
                Thank You!
                `
            };
            transporter.sendMail(selfMailOptions, (error, info) => {
                if (error) {
                    console.log('Error occurred:', error.message);
                }
            });
            return res.status(200).send({ message: 'Service Request has been submitted successfully' });
        }
        else{
            console.error('Requested service failed:', err);
            await Order.updateOne({ order_id: razorpay_order_id, userId: userId }, { status: "Failed" });
            await Service.updateOne({ _id: selectedServiceId, userId: userId, serviceId: serviceId},{status: "done"});
            return res.status(400).send({ error: 'Requested service failed' });
        }
        } catch (err) {
            console.error('Requested service failed:', err);
            await Order.updateOne({ order_id: razorpay_order_id, userId: userId, serviceId: serviceId }, { status: "Failed" });
            await Service.updateOne({ _id: selectedServiceId, userId: userId, serviceId: serviceId},{status: "done"});
            return res.status(400).send({ error: 'Requested service failed' });
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
        const services = await Service.find({})
        .populate('userId')
        .populate('serviceId')
        .populate('orderId')
        .sort({ createdAt: -1 });
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
        const services = await Service.find({ userId: userId })
        .populate('userId')
        .populate('serviceId')
        .populate('orderId')
        .sort({ createdAt: -1 });
        console.log(services)
        return res.status(200).send({ requests: services});
    } catch (error) {
        console.error('Error getting services:', error);
        return res.status(400).send({ error: 'Error getting services' });
    }
}

export const SendApiKey = async(req, res) => {
    return res.status(200).send({ api_key: process.env.RAZORPAY_KEY_ID });
}
