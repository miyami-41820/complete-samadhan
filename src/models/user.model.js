import mongoose, {Schema} from "mongoose";
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        email: {
            type: String,
        },
        fullName: {
            type: String,
        },
        number:{
            type: Number,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true
    }
)

// userSchema.pre("save", async function (next) {
//     if(!this.isModified("password")) return next();

//     this.password = await bcrypt.hash(this.password, 10)
//     next()
// })

// userSchema.methods.isPasswordCorrect = async function(password){
//     return await bcrypt.compare(password, this.password)
// }

// userSchema.methods.generateAccessToken = function(){
//     return jwt.sign(
//         {
//             _id: this._id,
//             email: this.email,
//             username: this.username,
//             fullName: this.fullName
//         },
//         process.env.ACCESS_TOKEN_SECRET,
//         {
//             expiresIn: process.env.ACCESS_TOKEN_EXPIRY
//         }
//     )
// }
// userSchema.methods.generateRefreshToken = function(){
//     return jwt.sign(
//         {
//             _id: this._id,
            
//         },
//         process.env.REFRESH_TOKEN_SECRET,
//         {
//             expiresIn: process.env.REFRESH_TOKEN_EXPIRY
//         }
//     )
// }

userSchema.method.createUser = async function (userDetails){
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