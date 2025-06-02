🌟 Business Review API
======================

This project is a **RESTful API** where users can review businesses, add them to favorites, and manage business-related images. It’s built using Express.js and MongoDB.

🚀 Features
-----------

*   ✅ User registration and login
*   ✅ Adding, updating, and listing businesses
*   ✅ Assigning categories to businesses
*   ✅ Adding reviews to businesses
*   ✅ Managing favorite businesses
*   ✅ Uploading and listing business images

🏗️ Project Setup
-----------------

### Requirements

*   Node.js (>= 14)
*   MongoDB

### Steps

1.  **Clone the repository**  
    `git clone https://github.com/dxtaner/MyWorkspace/tree/master/Projects/local-business-guide`
    `cd local-business-guide`
2.  **Install dependencies**  
    `npm install`
3.  **Set up the environment file**  
    Create a `.env` file in the root directory and fill it like this:  
    
    PORT=5000
    MONGO\_URI=your\_mongo\_db\_connection\_string
    JWT\_SECRET=a\_strong\_jwt\_secret
                
    
4.  **Start the server**  
    `npm run dev`

📂 Project Structure
--------------------

/config
    db.js                  --> MongoDB connection
/routes
    userRoutes.js          --> User endpoints
    businessRoutes.js      --> Business endpoints
    reviewRoutes.js        --> Review endpoints
    categoryRoutes.js      --> Category endpoints
    favoriteRoutes.js      --> Favorite endpoints
    businessImageRoutes.js --> Business image endpoints
    

📡 API Endpoints
----------------

*   `POST /api/users/register` → Register user
*   `POST /api/users/login` → User login
*   `GET /api/businesses` → List businesses
*   `POST /api/reviews` → Add a new review
*   `POST /api/favorites` → Add to favorites
*   `POST /api/business-images` → Upload business image

⚙️ Technologies Used
--------------------

*   **Node.js & Express.js** → Backend server
*   **MongoDB & Mongoose** → Database and modeling
*   **dotenv** → Environment variables management
*   **JWT** → Authentication

📄 License
----------

This project is licensed under the MIT License.
