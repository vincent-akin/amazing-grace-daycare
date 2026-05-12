Good. Now we move from **“what we are building” → “how we are building it.”**

This is the **SSD (System Design Document)** for _Amazing Grace Daycare Management System_.

---

# 📘 SYSTEM DESIGN DOCUMENT (SSD)

## 1. System Overview

The Amazing Grace system is a **web-based, client-server application** consisting of:

- A **frontend web app** (parent + admin interface)
- A **backend API server** (business logic layer)
- A **relational database** (data persistence layer)

The system follows a **3-tier architecture**:

```
Frontend (Next.js)
        ↓
Backend API (Node.js + Express)
        ↓
Database (PostgreSQL via Prisma)
```

---

## 2. Architecture Style

### Chosen Architecture: Layered Monolith (MVP Stage)

We are NOT using microservices.

Reason:

- Faster development
- Easier debugging
- Lower infrastructure cost
- Suitable for single-daycare scale

---

## 3. High-Level Component Design

### 3.1 Frontend Layer

Planned using Next.js

Responsibilities:

- Public website rendering
- Admission form UI
- Admin dashboard UI
- API communication (REST)

---

### 3.2 Backend Layer

Built with Node.js + Express

Responsibilities:

- Business logic
- Authentication
- API endpoints
- Validation
- Database interaction via Prisma

---

### 3.3 Database Layer

Powered by PostgreSQL Global Development Group with Prisma ORM

Responsibilities:

- Persistent data storage
- Relationship management
- Data integrity enforcement

---

## 4. Core Modules Design

### 4.1 Authentication Module

**Purpose:** Secure admin access

Flow:

```
Admin Login Request
      ↓
Validate credentials
      ↓
Compare password (bcryptjs)
      ↓
Generate JWT token
      ↓
Return token to client
```

Security:

- Password hashing using bcryptjs
- JWT-based stateless authentication
- Protected routes middleware

---

### 4.2 Admission Module

```
Parent submits form
      ↓
Backend validates input
      ↓
Stores admission as "PENDING"
      ↓
Admin reviews application
      ↓
Status updated: APPROVED / REJECTED
      ↓
If approved → Child record created
```

---

### 4.3 Child Management Module

Handles:

- Child creation
- Profile updates
- Linking child to parent
- Medical information storage

Relationship:

```
Parent (1) → (Many) Children
```

---

### 4.4 Contact Module

```
User submits message
      ↓
Stored in contact_messages table
      ↓
Admin views in dashboard
```

No external email dependency in MVP.

---

## 5. Database Design (Logical Model)

### 5.1 Entities

#### User (Admin/Staff)

- id
- name
- email
- password
- role

---

#### Parent

- id
- name
- phone
- email
- address

---

#### Child

- id
- name
- dob
- gender
- medical_notes
- parentId (FK)

---

#### Admission

- id
- parentId (FK)
- status (PENDING | APPROVED | REJECTED)
- createdAt

---

#### ContactMessage

- id
- name
- email
- message
- createdAt

---

## 6. API Design (REST)

### 6.1 Auth Routes

```
POST /api/auth/login
POST /api/auth/register (admin only)
```

---

### 6.2 Admission Routes

```
POST /api/admissions
GET  /api/admissions
PATCH /api/admissions/:id
```

---

### 6.3 Child Routes

```
POST /api/children
GET  /api/children
GET  /api/children/:id
```

---

### 6.4 Parent Routes

```
POST /api/parents
GET  /api/parents
```

---

### 6.5 Contact Routes

```
POST /api/contact
GET  /api/contact
```

---

## 7. Authentication & Authorization Flow

### JWT Flow

```
Login Request
   ↓
Validate credentials
   ↓
Generate JWT token
   ↓
Client stores token
   ↓
Attach token to API requests
   ↓
Backend verifies token middleware
```

Roles:

- ADMIN → full access
- STAFF → limited access (future)

---

## 8. Data Flow Example (Admission)

```
Frontend Form
      ↓
POST /api/admissions
      ↓
Express Controller
      ↓
Validation Layer
      ↓
Prisma ORM
      ↓
PostgreSQL
```

Response:

```
{ success: true, message: "Application submitted" }
```

---

## 9. Folder Architecture (Backend)

```txt
src/
  config/
    prisma.js

  controllers/
    auth.controller.js
    admission.controller.js
    child.controller.js

  routes/
    auth.routes.js
    admission.routes.js
    child.routes.js

  middleware/
    auth.middleware.js

  services/
    auth.service.js

  utils/
    validators.js

  app.js
  server.js
```

---

## 10. Security Design

- Password hashing → bcryptjs
- Authentication → JWT
- Input validation → middleware layer
- Environment variables for secrets
- CORS protection enabled

---

## 11. Deployment Architecture

### Frontend

- Hosted on Vercel Inc.

### Backend

- Hosted on Render or Railway

### Database

- Hosted on managed PostgreSQL (Neon / Supabase)

---

## 12. Non-Functional Design

### Scalability

- Designed for single-location daycare (horizontal scaling later)

### Performance

- Lightweight REST APIs
- Indexed relational queries

### Reliability

- Stateless backend
- Centralized database

---

## 13. Key Design Decisions

- Monolithic backend (simplifies MVP)
- PostgreSQL (structured relational data)
- Prisma ORM (developer productivity)
- JWT authentication (stateless design)
- No microservices (overkill at this stage)

---

## 14. Future Architecture Evolution

When scaling:

- Move to microservices (optional)
- Add Redis caching layer
- Introduce message queues
- Add mobile apps
- Introduce analytics service

---

## 15. Summary

This SSD defines a **clean, scalable, production-ready architecture** for the MVP version of Amazing Grace Daycare System.

It balances:

- Simplicity (fast development)
- Scalability (future expansion)
- Maintainability (clean separation of concerns)

---
