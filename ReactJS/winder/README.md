React E-Commerce Application
============================

This is a basic e-commerce application built with React. Users can browse products, filter by category, add/remove items from the cart, and navigate between different pages such as About and a 404 Not Found page.

🚀 Features
-----------

*   Product listing and category filtering
*   Add/remove products to/from the cart
*   Update product quantity in the cart
*   Page routing (with React Router)
*   User notifications (via alertify.js)
*   Responsive layout (using Reactstrap)

📦 Installation
---------------

### Requirements

*   Node.js must be installed
*   `json-server` must be installed for mock API usage

### Steps

1.  Clone the repository:
    
        git clone https://github.com/dxtaner/MyWorkspace/tree/master/ReactJS/winder
        cd winder
    
2.  Install dependencies:
    
        npm install
    
3.  Start the JSON Server:
    
    Place one of the following files in your project root as `db.json` and run:
    
        json-server --watch db.json --port 3000
    
    *   [dbpostsEwinder.json](https://github.com/dxtaner/MyWorkspace/blob/master/ReactJS/winder/api/dbpostsEwinder.json)
    *   [dbwinder.json](https://github.com/dxtaner/MyWorkspace/blob/master/ReactJS/winder/api/dbwinder.json)
4.  Start the React application:
    
        npm start
    

🔧 Technologies Used
--------------------

*   [React](https://reactjs.org/)
*   [React Router](https://reactrouter.com/)
*   [Reactstrap](https://reactstrap.github.io/)
*   [Bootstrap](https://getbootstrap.com/)
*   [AlertifyJS](https://alertifyjs.com/)
*   [JSON Server](https://github.com/typicode/json-server)

📁 Project Structure
--------------------

    src/
    ├── App.js             # Main app component
    ├── Navbar.js          # Navigation bar
    ├── CategoryList.js    # Category list component
    ├── ProductList.js     # Product list component
    ├── CartList.js        # Cart component
    ├── NotFound.js        # 404 component
    ├── About.js           # About page
    └── ...
    

📷 Screenshots
--------------

### 🎞️ App Usage

![App Usage](https://github.com/dxtaner/MyWorkspace/blob/master/ReactJS/winder/winder.gif)

### 📋 Category & Product Listing

![Category & Product Listing](https://github.com/dxtaner/MyWorkspace/blob/master/ReactJS/winder/winder2.gif)

🔗 API Data
-----------

*   [dbpostsEwinder.json](https://github.com/dxtaner/MyWorkspace/blob/master/ReactJS/winder/api/dbpostsEwinder.json) – blog-like structure
*   [dbwinder.json](https://github.com/dxtaner/MyWorkspace/blob/master/ReactJS/winder/api/dbwinder.json) – category & product structure

🧑‍💻 Developer
---------------

*   **Name:** Taner Özer
*   **GitHub:** [@dxtaner](https://github.com/dxtaner)
*   **Email:** tanerozer16@gmail.com

* * *

Happy coding! 🚀
