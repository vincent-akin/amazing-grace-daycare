## ADMIN

Step 1: Register admin

POST /api/auth/register
{
"name": "Admin",
"email": "admin@amazinggrace.com",
"password": "123456"
}

Step 2: Login

POST /api/auth/login
{
"email": "admin@amazinggrace.com",
"password": "123456"
}

Step 3: Access protected route
GET /api/test/protected
Authorization: Bearer <token>

## Parent submits

POST /api/admissions

{
"parentName": "Jane Doe",
"parentEmail": "jane@email.com",
"parentPhone": "08012345678",
"childName": "Tim Doe",
"childDob": "2021-05-01T00:00:00.000Z",
"childGender": "Male",
"medicalNotes": "Peanut allergy"
}

## Admin views applications

GET /api/admissions
Authorization: Bearer token

Approve
PATCH /api/admissions/:id/approve
Authorization: Bearer token

Reject
PATCH /api/admissions/:id/reject
Authorization: Bearer token
