import { Router } from "express";
import Model from "../model/completedmodel.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";


const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


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



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const myStorage = multer({ storage });
router.post("/uploads", myStorage.single("myfile"), (req, res) => {
  res.status(200).json({ status: "success" });
});

// Multer setup for file uploads


// Update project route
router.put("/update/:id", myStorage.single("myfile"), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, address } = req.body;

    // Find the project to update
    const project = await Model.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Update project details
    project.title = title;
    project.description = description;
    project.address = address;

    // If a new image is uploaded, replace the old one
    if (req.file) {
      // Delete the old image file
      if (project.image) {
        const oldImagePath = path.join(__dirname, project.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      project.image = `static/uploads/${req.file.filename}`;
    }

    // Save the updated project
    await project.save();

    res.status(200).json({ message: "Project updated successfully", project });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ message: "An error occurred while updating the project" });
  }
});


// router.put('/update/:id', (req, res) => {
// console.log(req.params.id);

//   Model.findByIdAndUpdate(req.params.id, req.body)
//       .then((result) => {
//           res.status(200).json(result);
//       }).catch((err) => {
//           console.log(err);
//           res.status(500).json(err);
//       });
// })


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
