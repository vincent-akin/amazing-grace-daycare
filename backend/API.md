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
"token": "jwt_token_here",
"user": { ... }
}

Step 3: Access protected route
GET /api/test/protected
Authorization: Bearer <token>
