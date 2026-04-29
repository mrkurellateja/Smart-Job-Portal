const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const Application = require("./models/Application");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/jobportal")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend Server Running 🚀");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();
    res.send("User Registered Successfully ✅");
  } catch (error) {
    console.log(error);
    res.status(500).send("Registration Failed");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      res.send("Login Successful ✅");
    } else {
      res.status(401).send("Invalid Email or Password");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Login Failed");
  }
});
app.post("/apply", async (req, res) => {
  const { jobTitle, company, applicantName, applicantEmail } = req.body;

  try {
    const newApplication = new Application({
      jobTitle,
      company,
      applicantName,
      applicantEmail
    });

    await newApplication.save();

    res.send("Job Applied Successfully ✅");
  } catch (error) {
    console.log(error);
    res.status(500).send("Application Failed");
  }
});
app.post("/apply", async (req, res) => {
  const { jobTitle, company, applicantName, applicantEmail } = req.body;

  try {
    const newApplication = new Application({
      jobTitle,
      company,
      applicantName,
      applicantEmail,
    });
    await newApplication.save();
    res.send("Job Applied Successfully ✅");
  } catch (error){
    console.log(error);
    res.status(500).send("Application Failed");
  }
});
app.get("/applications", async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to Fetch Applications");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});