import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    cpassword: {
        type: String,
        validate: {
          validator: function(v) {
            return v === this.password; // Ensure cpassword matches password
          },
          message: 'Passwords do not match'
        }
      },
      role: {
        type: String,
        default:"user",
      },
    },
    {timestamps:true}
  )

const Usermodel = mongoose.model("users",UserSchema)
export default Usermodel