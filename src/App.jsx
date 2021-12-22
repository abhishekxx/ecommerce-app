import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import './App.css'

const App = () => {
  return (
    <Router>
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
        
        <Route path="/product">
          <Product />
        </Route>
        
        
      </Switch>
    </div>
  </Router>


  );
}

export default App;