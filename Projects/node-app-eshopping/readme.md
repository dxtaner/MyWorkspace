Node.js Shopping App
====================

This project is a shopping web application built using Express.js, MongoDB, and the Pug template engine. It includes features like user authentication, product management, image uploads, session handling, and CSRF protection.

Features
--------

*   User registration and login
*   Admin panel to manage and add products
*   CSRF protection
*   Session handling with MongoDB store
*   Image upload with Multer
*   Custom 404 and 500 error pages
*   Dynamic HTML with Pug

Technologies Used
-----------------

*   Node.js & Express.js
*   MongoDB & Mongoose
*   Pug Template Engine
*   Body-parser, Cookie-parser, Express-session
*   Multer (file uploads)
*   CSURF (CSRF protection)

Installation
------------

### 1\. Clone the Repository

    git clone https://github.com/dxtaner/MyWorkspace/tree/master/Projects/node-app-eshopping
    cd node-app-eshopping

### 2\. Install Dependencies

    npm install

### 3\. Setup Configuration

Currently, the connection string is hardcoded. For better security, use environment variables (`.env`). Otherwise, replace the `ConnectionString` in `app.js`:

    const ConnectionString = "mongodb+srv://<username>:<password>@cluster0.guofsiq.mongodb.net/node-app-shopping?retryWrites=true";

### 4\. Start the App

    npm start

The app will run at [http://localhost:3000](http://localhost:3000).

Project Structure
-----------------

    .
    ├── controllers/
    ├── models/
    ├── public/
    │   └── img/
    ├── routes/
    │   ├── admin.js
    │   ├── account.js
    │   └── shop.js
    ├── views/
    │   └── ...
    ├── app.js
    └── package.json

Developer
---------

Taner Özer  
📧 [tanerozer16@gmail.com](mailto:tanerozer16@gmail.com)  
🔗 [GitHub: dxtaner](https://github.com/dxtaner)

License
-------

This project is licensed under the MIT License.
