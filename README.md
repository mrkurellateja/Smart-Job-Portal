# Smart-Job-Portal

A Full Stack Job Portal Web Application built using React.js, Node.js, Express.js, and MongoDB.

This project allows users to register, login, search jobs, apply for jobs, upload resumes, and view job details. It also includes an Admin Panel where admin can post jobs dynamically.

---

## 📌 Features

### User Side

* User Registration & Login
* Protected Routes
* Search Available Jobs
* Apply for Jobs
* View Job Details
* Resume Upload
* Profile Page
* Logout Functionality
* Toast Notifications
* Professional UI

### Admin Side

* Admin Dashboard
* Add New Jobs
* View Applications
* Manage Job Listings

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS / Inline Styling
* React Toastify

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Tools

* VS Code
* MongoDB Compass
* GitHub
* Vercel (Deployment)

---

## 📂 Project Structure

job-portal/
│
├── client/
│ ├── src/
│ │ ├── pages/
│ │ ├── App.js
│ │ ├── index.js
│ │
│ ├── package.json
│
├── server/
│ ├── models/
│ │ ├── User.js
│ │ ├── Application.js
│ │
│ ├── server.js
│ ├── package.json
│
└── README.md

---

## ⚙ Installation Steps

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/Smart-Job-Portal.git
```

---

### 2. Install Frontend Dependencies

```bash
cd client
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

### 3. Install Backend Dependencies

```bash
cd server
npm install
npx nodemon server.js
```

Backend runs on:

```text
http://localhost:5000
```

---

### 4. MongoDB Setup

* Open MongoDB Compass
* Create Database: `jobportal`
* Collections:

  * users
  * applications
  * jobs

Make sure MongoDB is connected successfully.

---

## 🔐 Login Flow

* User registers using name, email, password
* Data stored in MongoDB
* Login validates credentials using backend API
* After successful login:

  * localStorage stores login state
  * User redirected to Home Page
## Apply Job Flow
User clicks "Apply Now"
Job details sent to backend using Axios
Backend stores application in MongoDB
Toast notification shown successfully
