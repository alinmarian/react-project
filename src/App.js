import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";
import Services from "./components/pages/Services/Services";
import Products from "./components/pages/Products/Products";
import Contact from "./components/pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/react-project/" exact component={Home} />
        <Route path="/react-project/services" component={Services} />
        <Route path="/react-project/products" component={Products} />
        <Route path="/react-project/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
