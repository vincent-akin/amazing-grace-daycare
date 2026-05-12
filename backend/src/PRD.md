---

# 📄 PRODUCT REQUIREMENTS DOCUMENT (PRD)

## 1. Document Information

* **Product Name:** Amazing Grace Daycare Management System
* **Version:** 1.0 (MVP Specification)
* **Owner:** Vince Akin
* **Date:** May 2026
* **Status:** Draft (Pre-Development)

---

## 2. Executive Summary

Amazing Grace Daycare Management System is a web-based platform designed to digitize and streamline the operational processes of a daycare facility. The system replaces manual administrative workflows with a centralized digital solution for admissions, child record management, and parent communication.

The initial version (MVP) focuses on core operational efficiency for a single daycare center, with scalability for future multi-branch expansion and advanced features.

---

## 3. Problem Statement

Daycare operations at Amazing Grace Daycare are currently managed using manual and fragmented systems, including paper records and informal communication channels. This results in:

- Inefficient admission processing
- Lack of centralized child records
- Limited transparency for parents
- Administrative workload duplication
- Increased risk of data inconsistency or loss

There is a need for a structured digital system that improves operational efficiency, data integrity, and communication.

---

## 4. Product Objectives

The primary objectives of the system are:

- Digitize daycare admissions and enrollment workflows
- Centralize child and parent data management
- Provide an administrative dashboard for operational control
- Improve communication between parents and daycare administration
- Establish a scalable foundation for future product expansion

---

## 5. Target Users

### 5.1 Primary Users

**Parents**

- Submit child admission applications
- Send inquiries to the daycare
- (Future) View child progress and updates

**Administrator (Daycare Owner/Manager)**

- Review and manage admission applications
- Maintain child records
- Respond to inquiries
- Manage system data and announcements

### 5.2 Secondary Users (Future Scope)

**Staff Members**

- Access assigned child records
- Record daily activities
- Track attendance and progress

---

## 6. Scope Definition

### 6.1 MVP Scope (Version 1.0)

#### Public Interface

- Home page (overview and branding)
- About page (institution profile)
- Admission application form
- Contact/inquiry form

#### Administrative Dashboard

- Secure authentication system
- Admission management (approve/reject)
- Child record management (CRUD operations)
- Inquiry/message management
- Basic announcements management

#### Core Data Entities

- Parents
- Children
- Admission applications
- Administrative users
- Contact messages

---

### 6.2 Out of Scope (MVP)

The following features are explicitly excluded from version 1.0:

- Payment processing and billing
- Attendance tracking system
- Staff management module
- Mobile application
- Automated notifications (SMS/email)
- Multi-branch daycare support
- Parent portal dashboard

---

## 7. User Workflows

### 7.1 Parent Workflow

1. Access public website
2. Complete admission application form
3. Submit child and guardian details
4. Receive acknowledgment of submission
5. Await administrative response

---

### 7.2 Administrative Workflow

1. Authenticate into admin dashboard
2. View incoming admission applications
3. Review applicant details
4. Approve or reject application
5. Create corresponding child record (if approved)
6. Manage inquiries and system content

---

## 8. Functional Requirements

### 8.1 Admission System

- Capture parent and child information
- Store application data in database
- Track application status (Pending, Approved, Rejected)

### 8.2 Child Management System

- Create and manage child profiles
- Associate each child with a parent
- Store medical and personal notes

### 8.3 Authentication System

- Secure admin login
- Role-based access control (Admin, Staff - future)

### 8.4 Contact System

- Capture user inquiries from public interface
- Store messages for admin review

---

## 9. Data Model Requirements

The system must support relational data integrity for:

- Parent → Child (One-to-Many relationship)
- Parent → Admission Applications
- Child → Administrative records

Primary database technology: PostgreSQL (relational model)

---

## 10. Non-Functional Requirements

### 10.1 Performance

- API responses under 300ms for standard queries
- Scalable to at least 1,000 concurrent users (MVP assumption)

### 10.2 Security

- Password hashing using bcryptjs
- JWT-based authentication
- Environment-based configuration for secrets

### 10.3 Maintainability

- Modular backend architecture (controllers, services, routes)
- Clear separation of concerns
- Prisma ORM for database abstraction

### 10.4 Availability

- System designed for 99% uptime target (deployment dependent)

---

## 11. Technical Stack

### Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcryptjs

### Frontend (Planned)

- Next.js
- Tailwind CSS
- Component-based UI architecture

### Infrastructure

- Vercel (Frontend Hosting)
- Render / Railway (Backend Hosting)
- PostgreSQL managed database (e.g., Neon or Supabase)

---

## 12. Success Criteria

The MVP will be considered successful if:

- Admission process is fully digitized
- Admin can manage all core data via dashboard
- No reliance on paper-based record keeping
- System is stable and usable in real daycare operations
- At least one full admission cycle is completed digitally

---

## 13. Future Roadmap

### Phase 2

- Attendance tracking system
- Parent portal dashboard
- Notifications (email/SMS integration)

### Phase 3

- Payment integration via Paystack or Flutterwave
- Staff management system
- Activity logging

### Phase 4

- Multi-branch daycare support
- Analytics dashboard
- Mobile application

---

## 14. Risks & Assumptions

### Risks

- Limited technical adoption by non-technical staff
- Data entry inconsistencies during manual migration
- Scope creep beyond MVP

### Assumptions

- Single daycare branch at launch
- Admin has basic digital literacy
- Stable internet access at point of use

---

## 15. Notes

This PRD serves as the foundational product definition document. It will be iteratively refined as user feedback is collected during real-world usage.

---
