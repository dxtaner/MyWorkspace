// App.js
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import About from "./About.js";
import NotFound from "../common/NotFound";
import Footer from "./Footer";
import Login from "../pages/Login";
import Register from "../pages/Register";

function App() {
  return (
    <ChakraProvider>
      <div style={{ width: "100%", margin: 0, padding: 0 }}>
        <Navi />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/product" component={Dashboard} />
          <Route
            path="/saveproduct/:productId"
            component={AddOrUpdateProduct}
          />
          <Route path="/saveproduct" component={AddOrUpdateProduct} />
          <Route path="/cart" component={CartDetail} />

          <Route component={NotFound} />
        </Switch>
        <hr />
        <About />
        <Footer style={{ position: "fixed", bottom: "0" }} />
      </div>
    </ChakraProvider>
  );
}

export default App;
