const mongoose = require("mongoose");
const ApplicationSchema = new mongoose.Schema({
    jobTitle: String,
    company: String,
    applicantName: String,
    applicantEmail: String,
});
module.exports = mongoose.model("Application", ApplicationSchema);
