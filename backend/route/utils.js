import multer from "multer";
import express from "express";


const router = express.Router();

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




export default router;
