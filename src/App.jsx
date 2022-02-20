import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
    <div className="container">
    <Navbar />
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

       
        
        
      </Switch>
    </div>
  </Router>


  );
}

export default App;