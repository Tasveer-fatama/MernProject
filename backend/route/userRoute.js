import express from  'express'
import {SignupController,loginController,testController,} from '../controllers/SignupControllers.js'
import { isAdmin, requireSignIn } from '../middlewares/signupmiddleware.js'

//router object 
const router = express.Router()

//routing 
//REGISTER || METHOD POST
router.post('/signup',SignupController)

//LOGIN || POST
router.post('/login',loginController )

//test routes
router.get('/test',requireSignIn,isAdmin ,testController)

//protected admin route auth 
router.get("/admin",requireSignIn ,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})


export default router