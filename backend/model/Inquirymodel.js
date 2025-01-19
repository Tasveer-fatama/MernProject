import mongoose from 'mongoose'

const InquirySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    number:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true,
        unique:true
    },
   },{timeStamps:true})

const InquiryModel = mongoose.model("InquiryDetails",InquirySchema)
export default  InquiryModel