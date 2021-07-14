import "./App.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Intro } from "./components/intro/Intro";
import {
  Rating,
  Competitions,
  News,
  About,
  Contacts,
  Boxing,
  Ushu,
  Wrestling,
} from "./pages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/boxing" component={Boxing} />
          <Route path="/ushu" component={Ushu} />
          <Route path="/wrestling" component={Wrestling} />
          <Route path="/rating" component={Rating} />
          <Route path="/competitions" component={Competitions} />
          <Route path="/news" component={News} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Intro />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
