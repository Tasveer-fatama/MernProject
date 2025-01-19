import { Router } from "express";
import Model from "../model/completedmodel.js";


const router = Router();

router.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await new Model(req.body).save();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post("/authenticate", async (req, res) => {
  try {
    const result = await Model.findOne(req.body);
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
    const result = await Model.find({});
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/getbyid/:id", async (req, res) => {
  try {
    const result = await Model.findById(req.params.id);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


router.delete("/delete/:id", async (req, res) => {
  try {
    const result = await Model.findByIdAndDelete(req.params.id);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

export default router;
