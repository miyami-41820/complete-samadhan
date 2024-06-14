import mongoose, {Schema} from "mongoose";


const oderSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        status: {
            type: String,
            enum: ["Failed", "Done", "Instantiate"],
        },
        order_id:{
            type: String,
            required: true,
        },
        payment_id:{
            type: String,
            default: ""
        },
        signature:{
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
)

export const Order = mongoose.model("Order", oderSchema)
