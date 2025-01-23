import { Router } from "express";
import ResidentialModel from "../model/residentialmodel.js";


const router = Router();

router.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await new ResidentialModel(req.body).save();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post("/authenticate", async (req, res) => {
  try {
    const result = await ResidentialModel.findOne(req.body);
    if (result) {
      res.json(result);
    } else {
      res.status(401).json({ message: "Invalid Credential" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/getall", async (req, res) => {
  try {
    const result = await ResidentialModel.find({});
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/getbyid/:id", async (req, res) => {
  try {
    const result = await ResidentialModel.findById(req.params.id);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


router.delete("/delete/:id", async (req, res) => {
  try {
    const result = await ResidentialModel.findByIdAndDelete(req.params.id);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

export default router;
