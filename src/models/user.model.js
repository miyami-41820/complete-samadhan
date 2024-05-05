import mongoose, {Schema} from "mongoose";
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        email: {
            type: String,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        number:{
            type: Number,
            required: true,
            unique: true,
        },
        admin:{
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true
    }
)


export const User = mongoose.model("User", userSchema)