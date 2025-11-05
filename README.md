A Full-Stack Real-Time Email Validation Platform built with Node.js, Express, MongoDB, and Vanilla JavaScript.
Performs multi-layer email verification — format (regex), domain (MX), mailbox (SMTP), and disposable detection.
Includes optional API integration (Hunter.io) for advanced deliverability checks.
All validations are securely logged in MongoDB with user authentication (JWT + bcrypt).
Features a modern, responsive dashboard UI with real-time results and validation history.
---

## ✨ Features
- ✅ **Regex validation** → ensures correct email format.  
- ✅ **MX record lookup** → verifies that the email domain has real mail servers.  
- ✅ **SMTP verification** → optionally checks if the mailbox actually exists.  
- ✅ **Disposable email detection** → blocks temporary domains (e.g., Mailinator).  
- ✅ **External API integration (Hunter.io)** → validates deliverability (optional).  
- ✅ **Secure authentication system** → user login & signup with bcrypt + JWT.  
- ✅ **MongoDB logging** → stores validation history and user accounts.  
- ✅ **Responsive dashboard UI** → card-style form and aligned validation history.  
- ✅ **Instant feedback** → real-time valid/invalid email responses with color indicators.  
- ✅ **Lightweight stack** → Node.js, Express, MongoDB, and Vanilla JavaScript.  

---

## 📂 Project Structure
```text
email-validator/
│
├── server.js                  # Main Express server
├── .env                       # Environment variables (Mongo URI, JWT secret)
├── package.json               # Dependencies
│
├── models/
│   ├── Validation.js          # Schema for storing validation results
│   └── User.js                # Schema for authentication users
│
├── controllers/
│   ├── validatorController.js # Logic for MX, SMTP, API, disposable check
│   └── authController.js      # Handles user login and registration
│
├── routes/
│   ├── validatorRoutes.js     # /api/validate, /api/history routes
│   └── authRoutes.js          # /api/auth/login, /api/auth/register routes
│
├── public/
│   ├── index.html             # Main email validation dashboard UI
│   ├── login.html             # Login screen
│   ├── style.css              # Styling for all pages
│   ├── app.js                 # Frontend logic
│   └── images/logo.png        # App logo
│
└── README.md                  # Documentation

```
🧩 Tech Stack
Layer	Technology
Frontend:	HTML5, CSS3, Vanilla JavaScript
Backend:	Node.js + Express.js
Database:	MongoDB (via Mongoose ORM)
Authentication:	JWT (JSON Web Token), bcrypt.js
Environment Config:	dotenv
External API (Optional):	Hunter.io Email Verifier
UI Design:	Custom CSS with modern glassmorphism
Deployment:	Render / Vercel connected to GitHub repo
Improvements

📌 Add SMTP verification to check mailbox existence.

📌 Integrate with disposable email detection APIs (block temporary emails).

📌 Add rate limiting & logging for production use.

📌 Create a hosted version with Docker deployment.


⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/<your-username>/email-validator.git
cd email-validator

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/emailValidator
JWT_SECRET=my_super_secret_key_123
HUNTER_API_KEY=your_hunter_api_key_here   # Optional

4️⃣ Run MongoDB locally

Make sure MongoDB is running:

net start MongoDB


or

mongod

5️⃣ Start the server
node server.js


✅ Server will run at:
http://localhost:5000
