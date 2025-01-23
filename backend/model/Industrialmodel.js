import mongoose from 'mongoose'

const IndustrialSchema = new mongoose.Schema({
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

const Industrialmodel = mongoose.model("industrialProjects",IndustrialSchema)
export default Industrialmodel