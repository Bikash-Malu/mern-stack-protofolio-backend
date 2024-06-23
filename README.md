# Protoflio Point

Protoflio Point is an Admin Dashboard where users can create and manage their portfolios. This project is built using Node.js, Express.js, MongoDB, and Cloudinary.

## Author

- Bikash Malu

## Project Setup

Follow the instructions below to clone the repository and start the project.

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/username/protoflio-point.git
    cd protoflio-point
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory and add the following variables:

    ```env
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

4. **Start the project**

    ```bash
    npm run dev
    ```

    The development server should now be running on `http://localhost:3000`.

## Features

- User authentication and authorization
- Create, read, update, and delete portfolio items
- Image upload using Cloudinary
- Responsive admin dashboard

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Cloudinary
- EJS (Embedded JavaScript templates)
- CSS (for styling)

## Folder Structure

```plaintext
protoflio-point/
├── controllers/
├── models/
├── public/
│   ├── css/
│   └── js/
├── routes/
├── views/
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
