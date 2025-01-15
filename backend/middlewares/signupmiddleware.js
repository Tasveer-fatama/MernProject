import JWT from "jsonwebtoken";
import userModel from "../model/usermodel.js";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Authorization header is missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token is missing" });
    }

    const decoded = JWT.verify(token, process.env.JWT_SECRET || 'ASDFGHJKL987654321');
    req.user = decoded; // Ensure your token includes _id or user information
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    res.status(401).json({ error: "Invalid or expired token" });
  }
};


//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    console.log("Request User ID:", req.user._id); // Debug user ID
    const user = await userModel.findById(req.user._id);

    if (!user) {
      console.log("User not found in DB");
      return res.status(401).send({ success: false, message: "User not found" });
    }

    console.log("User Role:", user.role); // Debug user role

    if (user.role !== "admin") {
      console.log("Unauthorized Access: User is not admin");
      return res.status(403).send({
        success: false,
        message: "Unauthorized Access",
      });
    } else {
      console.log("Admin Access Granted");
      next();
    }
  } catch (error) {
    console.log("Middleware Error:", error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};
