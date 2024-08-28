import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.js"
import logger from "../controllers/logger.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res
      .status(201)
      .json({ message: "User registered", user: { email: user.email } });
  } catch (error) {
    res.status(400).json({ message: "Error registering user", error });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }


    // const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
    const jwtsecretkey = "mysecret";
    const token=jwt.sign(
      {
        data: user.email,
      },
     jwtsecretkey
    );

   
    res.json({ message: "Login successful", token });
  } catch(e) {
    console.log(e);
    
    res.status(500).json({ message: "Error", e});
  }
});

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};


export default router
