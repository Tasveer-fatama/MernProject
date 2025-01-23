import mongoose from 'mongoose'

const ResidentialSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
   address:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String
        },
   },{timeStamps:true})

const residentialmodel = mongoose.model("ResidentialProjects",ResidentialSchema)
export default residentialmodel