import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        message_id: {
            type: String,
        },
        otp: {
            type: String,
        },
    },
    {
        timestamps: true
    }
)

userSchema.method.create_otp = async function (userDetails){
    if(userDetails.email){
        this.email = userDetails.email
    }
    if(userDetails.fullName){
        this.fullName = userDetails.fullName
    }
    if(userDetails.number){
        this.number = userDetails.number
    }
    if(userDetails.password){
        this.password = userDetails.password
    }
    await this.save()
    return this
}

export const User = mongoose.model("User", userSchema)