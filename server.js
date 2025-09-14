require("dotenv").config();
const express = require("express");
const dns = require("dns");
const path = require("path");
const cors = require("cors");
const emailExistence = require("email-existence");


const app = express();
app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));

// // Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});




// API route for MX validation
app.post("/api/validate-mx", (req, res) => {
  const { email } = req.body;
  if (!email || typeof email !== "string") {
    return res.status(400).json({ ok: false, reason: "invalid_input" });
  }

  const parts = email.split("@");
  if (parts.length !== 2) {
    return res.json({ ok: false, reason: "invalid_format" });
  }

  const domain = parts[1].toLowerCase();

  dns.resolveMx(domain, (err, addresses) => {
    if (err || !addresses || addresses.length === 0) {
      return res.json({ ok: false, domain, reason: "no_mx" });
    }
    addresses.sort((a, b) => a.priority - b.priority);
    return res.json({ ok: true, domain, mx: addresses });
  });
});




// SMTP validation
app.post("/api/validate-smtp", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ ok: false, reason: "invalid_input" });
  }

  emailExistence.check(email, (err, response) => {
    if (err) {
      return res.json({ ok: false, reason: "smtp_error" });
    }
    if (response) {
      return res.json({ ok: true, email, reason: "smtp_valid" });
    } else {
      return res.json({ ok: false, email, reason: "smtp_invalid" });
    }
  });
});

// Use Render's dynamic port
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

