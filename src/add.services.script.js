import { ServiceList } from "./models/services-list.model.js"
import {ObjectId} from "mongodb"

export const completeSamaadhanServices = [
    {
        '_id': new ObjectId(),
        'serviceId': 1,
        'name': 'Passport',
        'description': "Apply or reissue your passport in just 120 minutes.",
        'price': 100,
        'servicesOffered': 'Passport Application, Passport Reissue'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 2,
        'name': 'RC',
        'description': "Navigate your RC journey smoothly in just 120 minutes.",
        'price': 100,
        'servicesOffered': 'Apply for New RC, Update Details or Fix Error'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 3,
        'name': 'Flight Tickets',
        'description': "Secure flight tickets in just 30 minutes.",
        'price': 100,
        'servicesOffered': 'Best Rates Guaranteed, Swift Booking'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 4,
        'name': 'Train/Bus Ticket Booking',
        'description': "Book train or bus tickets in just 30 minutes.",
        'price': 50,
        'servicesOffered': 'Best Rate Guaranteed, Swift Booking'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 5,
        'name': 'EWS Certificate',
        'description': "Get your EWS certificate in minutes. for Rs.75.",
        'price': 75,
        'servicesOffered': 'New EWS Certificate, Renewal Services'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 6,
        'name': 'Domicile / Income Certificate',
        'description': "Obtain domicile or income certificates in just 30 minutes.",
        'price': 50,
        'servicesOffered': 'Domicile Certificate, Income Certificate'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 7,
        'name': 'Admission Forms',
        'description': "Get admission forms for all universities in just 120 minutes.",
        'price': 100,
        'servicesOffered': 'Admission Forms for All Universities'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 8,
        'name': 'Hotel Bookings',
        'description': "Secure the perfect hotel in just 30 minutes.",
        'price': 50,
        'servicesOffered': 'Hotel Booking'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 9,
        'name': 'Saving / Current Account Opening',
        'description': "Open personal savings or current account in just 90 minutes.",
        'price': 100,
        'servicesOffered': 'Savings Account Opening, Current Account Opening'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 10,
        'name': 'Insurance',
        'description': "Obtain comprehensive insurance services",
        'price': 100,
        'servicesOffered': 'Life Insurance, Health Insurance, Vehicle Insurance'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 11,
        'name': 'Driving License',
        'description': "Apply or correct your driving license in just 90 minutes.",
        'price': 100,
        'servicesOffered': 'Apply for New License, Correction Services'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 12,
        'name': 'PF ID Changes',
        'description': "Orchestrate PF ID changes in just 120 minutes.",
        'price': 100,
        'servicesOffered': 'Personal Details Update, ID Modification'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 13,
        'name': 'Ration Card',
        'description': "Apply or correct your ration card in just 120 minutes.",
        'price': 100,
        'servicesOffered': 'New Ration Card, Correction Services'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 14,
        'name': 'Visa',
        'description': "Obtain various visas",
        'price': 100,
        'servicesOffered': 'Business Visa, Student Visa, Tourist Visa, Work Visa'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 15,
        'name': 'Loans',
        'description': "Access hassle-free loans",
        'price': 100,
        'servicesOffered': 'Business Loans, Educational Loans, Personal Loans'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 16,
        'name': 'Travel Packages',
        'description': "Choose from diverse travel packages",
        'price': 100,
        'servicesOffered': 'Personalized Vacation Packages, Business Travel Solutions, Group Gateways'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 17,
        'name': 'All Government Job Forms',
        'description': "Fill out all government job forms",
        'price': 100,
        'servicesOffered': 'All Government Job Forms'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 18,
        'name': 'Caste certificate',
        'description': "Get your caste certificate",
        'price': 100,
        'servicesOffered': 'Caste certificate'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 19,
        'name': 'Voter ID',
        'description': "Apply or correct your Voter ID in just 45 minutes..",
        'price': 50,
        'servicesOffered': 'Apply for a New Voter ID, Correction Services'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 20,
        'name': 'Water Department changes',
        'description': "Navigate water department changes in just 120 minutes.",
        'price': 100,
        'servicesOffered': 'Billing Information update, Connection Details Modification'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 21,
        'name': 'Online challan Payment',
        'description': "Pay online challans in just 30 minutes.",
        'price': 50,
        'servicesOffered': 'Online challan Payment'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 22,
        'name': 'Aadhar Card',
        'description': "Sort your Aadhar card concerns in just 30 minutes.",
        'price': 50,
        'servicesOffered': 'Aadhar Card'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 23,
        'name': 'PAN Card',
        'description': "Apply or reissue your PAN card in just 120 minutes..",
        'price': 100,
        'servicesOffered': 'PAN Card Application, PAN Card Reissue'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 24,
        'name': 'PF Amount Assistance',
        'description': "Get expert assistance for your PF processes for just Rs.100 per service.",
        'price': 100,
        'servicesOffered': 'PF withdrawal Assistance, PF Transfer services, PF Balance check, PF Nomination Update',
    },
    {
        '_id': new ObjectId(),
        'serviceId': 24,
        'name': 'PF Amount Assistance',
        'description': "Pay your gas bill in just 120 minutes.",
        'price': 100,
        'servicesOffered': 'Gas Bill Payment'
    },
    {
        '_id': new ObjectId(),
        'serviceId': 25,
        'name': 'Admission Fee Assistance',
        'description': "Secure your educational future with our 90 minutes. guarantee for fee payment assistance at just Rs.100 per service.",
        'price': 100,
        'servicesOffered': 'Admission Fee Assistance',
    },
    {
        '_id': new ObjectId(),
        'serviceId': 26,
        'name': 'Electricity Department Changes',
        'description': "Ensure secure and efficient handling of your electricity department changes with our 120 minutes. guarantee.",
        'price': 100,
        'servicesOffered': 'Change of Billing Address, Connection Transfer, Name Change on Bill, Tariff Plan Changes, New Connection Requests'
    },
]


export const addServices = async () => {
    try {
        await ServiceList.insertMany(completeSamaadhanServices)
        console.log("Services added successfully")
    } catch (error) {
        console.log("Error while adding services", error)
    }
}