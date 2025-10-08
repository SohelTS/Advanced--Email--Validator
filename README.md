# Advanced--Email--Validator
Email validator that checks format, domain (MX records), and mailbox validity. Built with Node.js, Express, and Vanilla JavaScript.
A full-stack email validation app that checks both format (regex) and domain existence (MX records), ensuring emails are real and not just well-formed.
# 📧 Advanced Email Validation (Node.js + Vanilla JS)
This project is an **Email Validation Web App** that checks not only the **format** of an email address but also whether the **domain has valid mail servers (MX records)**.  

Unlike simple regex-based validators, this ensures that the email domain is real and capable of receiving emails.

---

## ✨ Features
- ✅ **Regex validation** → ensures correct email format.  
- ✅ **MX record lookup** → checks if the email domain has real mail servers.  
- ✅ **Works for any domain** (Gmail, Yahoo, Outlook, or company domains).  
- ✅ **Modern UI/UX** → card-style form with smooth animations.  
- ✅ **Instant feedback** with ✅ green (valid) or ❌ red (invalid).  
- ✅ **Lightweight stack** → built with Node.js + Vanilla JavaScript (no frameworks).  

---

## 📂 Project Structure
```text
PRo/
├── images/
│ ├── valid.png
│ └── invalid.png
├── index.html # Frontend UI
├── style.css # Styling
├── app.js # Frontend logic
├── server.js # Backend server with MX validation
└── package.json # Node.js config & dependencies
```
🔧 Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express

Validation: Node.js dns module (MX lookup)

Improvements

📌 Add SMTP verification to check mailbox existence.

📌 Integrate with disposable email detection APIs (block temporary emails).

📌 Add rate limiting & logging for production use.

📌 Create a hosted version with Docker deployment.

