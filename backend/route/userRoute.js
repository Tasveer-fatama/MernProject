import express from  'express'
import {SignupController,loginController,testController,} from '../controllers/SignupControllers.js'
import { isAdmin, requireSignIn } from '../middlewares/signupmiddleware.js'
import UserModel from '../model/usermodel.js'
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

router.get("/getall", async (req, res) => {
    try {
      const result = await UserModel.find({});
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });

  router.get("/getbyid/:id", async (req, res) => {
    try {
      const result = await UserModel.findById(req.params.id);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });

  router.delete("/delete/:id", async (req, res) => {
    try {
      const result = await UserModel.findByIdAndDelete(req.params.id);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });

export default router