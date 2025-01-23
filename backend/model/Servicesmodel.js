import mongoose from 'mongoose'

const ServicesSchema = new mongoose.Schema({
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
  image:{
        type:String
        },
   },{timeStamps:true})

const Servicesmodel = mongoose.model("ProjectServices",ServicesSchema )
export default Servicesmodel