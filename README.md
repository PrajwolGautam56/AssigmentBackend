Backend App

Description:

This project is a full-stack web application with a React frontend and an Express backend. It includes features for user registration, login, profile management, and password reset using gmail functionality.

Features

User Registration: Allows users to register with their username, email, and password.
User Login: Users can log in with their email and password.
Profile Management: Users can view their profile details after logging in.
Password Reset: Users can request a password reset and change their password using a secure link sent via email.


Installation

 
Clone the Repository
bash
Copy code
git clone https://github.com/PrajwolGautam56/AssigmentBackend.git


 
cd AssigmentBackend
Install Dependencies
-->
npm install
Create a .env File

Copy the .env.example to .env and configure the following environment variables:

PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_google_email
EMAIL_PASS=your_google_email_password


Run the Server
 
npm start
