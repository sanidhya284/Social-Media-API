# PostAway - Social Media API

PostAway is a backend API built using **Node.js**, **Express**, and **MongoDB (Mongoose)** that powers a basic social media application. It supports essential features like user authentication, post creation, comments, likes, friend requests, and media uploads.

> 📄 [View Full Documentation on Hashnode](https://hashnode.com/docs/683f1f26a885f542dfa24aa5/guide/683f1f279bb24a87a6473e75/version/683f1f279bb24a87a6473e76/page/6872000bde48a264da3c2ff7)

---

## Features

* User Signup and Login (JWT-based Auth)
* Create, Read, Update, and Delete Posts
* Add and Manage Comments on Posts
* Like and Unlike Posts
* Friend Request System (Send, Accept)
* OTP Verification Flow
* File Uploads (Media for posts)
* Centralized Error Handling
* Swagger API Documentation

---

## Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB** with **Mongoose**
* **JWT** for authentication
* **Multer** for file uploads
* **Swagger** for API documentation

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/) (Make sure MongoDB is installed and running locally)

---

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/sanidhya284/Social-Media-API.git
cd Social-Media-API
```

2. **Install dependencies**

```bash
npm install
```

3. **Start MongoDB**

```bash
mongod --dbpath /path/to/your/mongodb/data
```

4. **Run the server**

```bash
nodemon server.js
# or
node server.js
```

The API will be live at `http://localhost:4200`.

---

## API Endpoints

> See full Swagger documentation at `swagger.json` or in the [Hashnode Guide](https://hashnode.com/docs/683f1f26a885f542dfa24aa5/guide/683f1f279bb24a87a6473e75/version/683f1f279bb24a87a6473e76/page/6872000bde48a264da3c2ff7)

### 🧑 User

* `POST /api/users/signup` – Register a new user
* `POST /api/users/signin` – Login and receive a JWT

### 📝 Posts

* `GET /api/posts/all` – Fetch all posts
* `POST /api/posts` – Create a new post
* `PUT /api/posts/:id` – Update a post
* `DELETE /api/posts/:id` – Delete a post

### 💬 Comments

* `GET /api/comments/:postId` – Get comments for a post
* `POST /api/comments/:postId` – Add a comment
* `PUT /api/comments/:id` – Edit a comment
* `DELETE /api/comments/:id` – Delete a comment

### 👍 Likes

* `GET /api/likes/:postId` – View likes on a post
* `GET /api/likes/toggle/:postId` – Toggle like/unlike

### 🤝 Friendships

* `POST /api/frndship/send/:userId` – Send a friend request
* `POST /api/frndship/accept/:userId` – Accept a request

### 🔐 OTP

* `POST /api/otp/generate` – Generate OTP
* `POST /api/otp/verify` – Verify OTP

---

## Folder Structure

```
src/
├── config/                 # Database connection
├── error-handler/          # Application-level error handling
├── features/               # Feature-wise modules
│   ├── user/               # User authentication
│   ├── post/               # Post CRUD
│   ├── comment/            # Comment functionality
│   ├── like/               # Like system
│   ├── frndship/           # Friend request logic
│   └── otp/                # OTP generation and verification
├── middlewares/            # JWT, file uploads, logging, validation
uploads/images/             # Media files
```

---

## Author

**Sanidhya**
[GitHub Profile](https://github.com/sanidhya284)

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---
