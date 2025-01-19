import mongoose from 'mongoose'

const CommercialSchema = new mongoose.Schema({
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

const Commercialmodel = mongoose.model("commercialProjects",CommercialSchema)
export default Commercialmodel