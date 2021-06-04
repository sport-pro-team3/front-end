import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/common/header/Header";
import { Intro } from "./components/common/intro/intro";
import {
  Federations,
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
    <div className="App ">
      <Router>
        <Header />
        <Switch>
          <Route path="/federations" component={Federations} />
          <Route path="/boxing" component={Boxing} />
          <Route path="/ushu" component={Ushu} />
          <Route path="/wrestling" component={Wrestling} />
          <Route path="/rating" component={Rating} />
          <Route path="/competitions" component={Competitions} />
          <Route path="/news" component={News} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>
      <Intro />
    </div>
  );
}

export default App;
