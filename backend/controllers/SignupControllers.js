import { comparePassword, hashPassword } from "../Helpers/userhelper.js";
import Usermodel from "../model/usermodel.js";
import JWT from "jsonwebtoken"

export const SignupController = async (req, res) => {
  try {
    const { name, email, password,cpassword} = req.body;

    // Validations
    if (!name) {
      return res.send({ message: 'Name is required' });
    }
    if (!email) {
      return res.send({ message: 'Email is required' });
    }
    if (!password) {
      return res.send({ message: 'Password is required' });
    }
    

    // Check if passwords match
    if (password !== cpassword) {
      return res.send({ error: 'Passwords do not match' });
    }

    // Check if user already exists
    const existingUser = await Usermodel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: 'Already registered. Please login.',
      });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Register the user
    const user = new Usermodel({ name, email, password: hashedPassword });
    await user.save();

    // Send response
    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in signup',
      error,
    });
  }
};

//POST LOGIN 
export const loginController =async (req,res) =>{
try {
    const {email,password} = req.body

    //validation
    if(!email || !password){
        return res.status(404).send({
            success:false,
            message:'Invalid email or password'
        })
    }
    //check user 
    const user = await Usermodel.findOne({email})
    if (!user){
       return res.status(404).send({
        success:false,
        message:"Email is not registerd"
       }) 
    }
const match = await comparePassword(password, user.password)
if(!match)
 return res.status(200).send({
   success:false,
   message:"Invalid password"
})

//token 
const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET||"ASDFGHJKL987654321",{expiresIn:"3d",
})
res.status(200).send({
    success:true,
    message:"login successfully",
    user:{
        email:user.email,
        password:user.password,
        role:user.role,
    },
    token,
})
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:'error in login',
        error
    })
}
}

//test controller
export const testController = (req,res) =>{
    res.send("protected route")
    }

    