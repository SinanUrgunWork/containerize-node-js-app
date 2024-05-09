# Multi-Container Newsletter Subscription App

This project provides a simple newsletter subscription system using two separate Docker containers: one for the frontend (user-facing HTML form) and another for the backend (API handling the form submissions). 

## Project Structure
The application is divided into two separate services:
- **Frontend Service:** Serves the HTML form where users can submit their email addresses.
- **Backend Service:** Handles the submitted emails and logs them.

## Technology Stack
- **Backend:** Node.js, Express
- **Frontend:** Node.js, Express, Static HTML/CSS
- **Containerization:** Docker, Docker Compose

## Directory Structure
project/  
│  
├── backend/  
│ ├── app.js  
│ ├── Dockerfile  
│ └── package.json  
│  
├── frontend/  
│ ├── app.js  
│ ├── Dockerfile  
│ ├── package.json  
│ └── index.html  
│  
└── docker-compose.yml  

### Backend Service
The backend service listens on port `3001` and accepts form submissions via a `/subscribe` API endpoint. It logs the submitted email addresses to the console.

- **Backend `package.json`:** Contains the necessary dependencies for the backend service.
- **Backend `app.js`:** Sets up the Express server and handles form submissions.

### Frontend Service
The frontend service listens on port `3000` and serves a static HTML form where users can submit their email addresses.

- **Frontend `package.json`:** Contains the necessary dependencies for the frontend service.
- **Frontend `app.js`:** Uses Express to serve the `index.html` file.
- **Frontend `index.html`:** Provides a simple HTML form for email submissions.

## How to Run the Project
1. **Prerequisites:** Ensure that Docker and Docker Compose are installed on your system.

2. **Clone the Repository:**
   ```bash
   git clone <your-repository-url>
   cd <project-directory>
## Build and Run with Docker Compose:
This command will build both the frontend and backend services and start them in the background.
docker-compose up --build -d
## Access the Application:
Visit http://localhost:3000/ to open the subscription form.
## Test Email Logging:
Submit an email using the form.
Check the backend logs to verify that the email is logged.
docker-compose logs backend
