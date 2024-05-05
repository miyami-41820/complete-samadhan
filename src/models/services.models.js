import mongoose, {Schema} from "mongoose";


const serviceSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        serviceId: {
            type: Schema.Types.ObjectId,
            ref: "ServiceList",
        },
        status: {
            type: String,
            enum: ["Submitted", "Contacted", "Processing", "Decline", "Complete"],
        },
        requestUser: {
            type: String,
        },
        requestNumber: {
            type: Number,
        },
        requestEmail: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true
    }
)

export const Service = mongoose.model("Service", serviceSchema)
