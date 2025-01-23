import mongoose from 'mongoose'

const CompletedSchema = new mongoose.Schema({
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

const Completedmodel = mongoose.model("completedProjects",CompletedSchema)
export default Completedmodel