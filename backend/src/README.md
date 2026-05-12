# 🌟 Amazing Grace Daycare Management System

A full-stack daycare management platform built for **Amazing Grace Daycare** to streamline admissions, child records, communication, and administration.

This project is designed as a real-world production system, not just a tutorial app.

---

## 📌 Overview

Amazing Grace Daycare System helps manage:

- Parent admissions and applications
- Child records and profiles
- Admin dashboard operations
- Contact and inquiry handling
- Future: attendance tracking, payments, and staff management

Built with scalability and maintainability in mind.

---

## 🧱 Tech Stack

### Backend

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication
- bcryptjs

### Frontend (Planned)

- Next.js
- Tailwind CSS
- Shadcn UI

### Dev Tools

- Git & GitHub
- Nodemon
- dotenv

---

## 📁 Project Structure

```

amazing-grace/
│
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   │
│   └── package.json
│
├── frontend/ (coming soon)
│
└── README.md

```

---

## 🗄️ Database Design

### Main Models

#### User (Admin/Staff)

- Authentication system
- Role-based access control

#### Parent

- Stores parent details
- Linked to children

#### Child

- Child profile and medical info
- Belongs to a parent

#### Admission

- Handles enrollment requests
- Tracks status: pending, approved, rejected

#### Contact Messages

- Stores inquiries from website visitors

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/amazing-grace.git
cd amazing-grace/backend
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup environment variables

Create a `.env` file in the backend root:

```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/amazing_grace_db"
JWT_SECRET="your_secret_key"
PORT=5000
```

---

### 4. Setup database

Create PostgreSQL database:

```sql
CREATE DATABASE amazing_grace_db;
```

Run migrations:

```bash
npx prisma migrate dev --name init
```

---

### 5. Start development server

```bash
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## 📡 API Endpoints (Planned)

### Health Check

```
GET /api/health
```

---

### Auth (Admin)

```
POST /api/auth/register
POST /api/auth/login
```

---

### Admissions

```
POST /api/admissions
GET  /api/admissions
PATCH /api/admissions/:id
```

---

### Children

```
POST /api/children
GET  /api/children
GET  /api/children/:id
```

---

### Parents

```
POST /api/parents
GET  /api/parents
```

---

### Contact Messages

```
POST /api/contact
GET  /api/contact
```

---

## 🔐 Authentication

- Passwords are hashed using bcryptjs
- JWT tokens used for session management
- Role-based access: ADMIN / STAFF

---

## 🚧 Current Status

### Completed

- Backend setup
- PostgreSQL integration
- Prisma schema design
- Database migrations
- Project structure setup

### In Progress

- Authentication system
- API route implementation

### Upcoming

- Admin dashboard (frontend)
- Parent portal
- Attendance tracking
- Payment integration
- Notifications system

---

## 🎯 Project Goals

This system is designed to:

- Digitize daycare operations
- Reduce manual record keeping
- Improve parent communication
- Provide real-time access to child data
- Serve as a scalable SaaS foundation

---

## 🧠 Learning Outcomes

This project demonstrates:

- Full-stack architecture design
- REST API development
- Database modeling (PostgreSQL)
- ORM usage (Prisma)
- Authentication & security
- Production-ready project structure

---

## 📌 Future Enhancements

- Attendance tracking system
- SMS/Email notifications
- Payment integration (Paystack / Flutterwave)
- Mobile app version
- Analytics dashboard
- Multi-branch support

---

## 👨‍💻 Author

Built by **Vince Akin**

Backend Developer | Aspiring Full-Stack Engineer

---

## 📄 License
