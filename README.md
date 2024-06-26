﻿# YOUTUBE_CLONE

A clone of the YouTube website built using modern web technologies.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (signup, login, logout)
- Video upload and playback
- Commenting on videos
- Like and dislike videos
- Responsive design for mobile and desktop
- Search functionality

## Technologies Used

- **Frontend:**
  - React
  - Tailwind CSS
  - React Router
  - Axios

- **Backend:**
  - Node.js
  - Express
  - MongoDB

- **Other Tools:**
  - JWT for authentication
  - Multer for file uploads
  - Bcrypt for password hashing

## Setup

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Samta1997/YOUTUBE_CLONE.git
   cd youtube-clone

2. Install frontend dependencies:
    cd client
    npm install

3. Install backend dependencies:
    cd server
    npm install

### Configuration
Create a .env file in the backend directory and add the following environment variables:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret



### Running the Application
1. Start the backend server:
    cd server
    node index.js

2. Start the frontend development server:
    cd client
    npm run dev
    Open your browser and go to http://localhost:5173

## Usage
Sign up for a new account or log in with existing credentials.
Upload videos from the upload section.
Browse videos, comment, like, and dislike.
Search for videos using the search bar.
Folder Structure

youtube-clone/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── .env
│   └── package.json
├── README.md
└── ...

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

Fork the repository.
Create your feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

