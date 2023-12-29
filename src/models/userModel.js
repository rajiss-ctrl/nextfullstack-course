import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true, "Please provide a username"],
        unique:true
    },
    email:{
        type:String,
        required: [true, "Please provide an email"],
        unique:true
    },
    password:{
        type:String,
        required: [true, "Please provide a password"],
    },
    isVarified:{
        type:Boolean,
        default: false,
    },
    isAdmin:{
        type:Boolean,
        default: false,
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,
})

// const User = mongoose.models.users || mongoose.model("user", userSchema)
const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User