import mongoose, {Schema} from "mongoose";

const otpSchema = new Schema(
    {
        number: {
            type: Number,
            required: true,
        },
        otp: {
            type: String,
            required: true,
        },
        count: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true
    }
)

export const Otp = mongoose.model("Otp", otpSchema)
