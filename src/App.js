import { Route } from "react-router-dom";
import About from "./pages/About";
import Covid from "./pages/Covid";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

var App = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route> 
      <Route exact path="/profile" component={Profile}></Route>
      <Route exact path="/covid" component={Covid}></Route>
      <Footer />
    </div> 
  );
}

export default App;
