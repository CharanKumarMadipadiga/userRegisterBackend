## User Registration Api
This is a Node.js-based backend API for user registration, built with Express.js, MongoDB, and middleware utilities like CORS and Morgan for logging.

## Project Structure
.
├── db/
│   └── index.js           # MongoDB connection logic
├── middlewares/
│   └── logger.middleware.js # Custom logging middleware
├── routes/
│   └── registerUser.js     # API route for registering users
├── server.js               # Main server file
├── .env                    # Environment variables file
└── package.json            # Dependencies and scripts

## Features
User registration with a REST API.
MongoDB integration for storing user data.
CORS enabled to allow cross-origin requests.
Morgan for HTTP request logging.
Custom logger middleware for additional logging functionality.

## Prerequisites
Make sure you have the following installed:
Node.js
MongoDB

## Installation
# Clone the repository:
git clone https://github.com/your-repo-name.git
cd your-repo-name

# Install dependencies:
npm install

# Create a .env file in the root of the project with the following variables:
PORT=8000
MONGODB_URI=<your-mongodb-connection-string>

# Start the server:
npm start

## Middleware
CORS: Enables cross-origin resource sharing for handling requests from different origins.
Morgan: Logs HTTP requests to the console for easy monitoring.
Custom Logger Middleware: Additional middleware for custom logging logic.

## MongoDB Connection
The server connects to a MongoDB instance using the URI provided in the .env file. Make sure your MongoDB instance is running before starting the server.

## Error Handling
The server will log any errors that occur during initialization or while the app is running. If the MongoDB connection fails, an error message will be displayed.

## License
# Key Steps:
- Replace `<your-mongodb-connection-string>` with your actual MongoDB connection URI in the `.env` file.
- Adjust the repository link in the installation section after pushing to GitHub. 

# Let me know if you'd like to add any additional information!
