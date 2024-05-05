import mongoose, {Schema} from "mongoose";

const serviceListSchema = new Schema(
    {
        serviceId: {
            type: Number,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        servicesOffered:{
            type: String,
        },
        // process:{
        //     type: String,
        //     required: true,
        // },
    },
    {
        timestamps: true
    }
)

export const ServiceList = mongoose.model("ServiceList", serviceListSchema)
