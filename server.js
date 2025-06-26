// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "toriopaolo12@gmail.com", // change this
      pass: "lrpn zjmy kxld mwil",    // see step 3
    },
  });

  const mailOptions = {
    from: email,
    to: "toriopaolo12@gmail.com", // where messages go
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("EMAIL ERROR:", err); // Add this line
    res.status(500).json({ error: "Failed to send email", details: err });
  }
  
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
