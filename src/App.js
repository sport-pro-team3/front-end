import "./App.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Intro } from "./components/intro/Intro";
import NewsItems from "./pages/News/NewsItems";
import { News } from "./pages/News";
import MainComponent from "./components/main/MainComponent";
import SportInfo from "./components/main/SportInfo";
import { Competitions } from "./pages";
import { Rating, About, Contacts, Boxing, Ushu, Wrestling } from "./pages";
import CompetitionsItem from "./pages/Competitions/CompetitionsItem";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/sportinfo" exact component={MainComponent} />
          <Route path="/sportinfo/:sports_id" render={() => <SportInfo />} />
          <Route path="/boxing" component={Boxing} />
          <Route path="/ushu" component={Ushu} />
          <Route path="/wrestling" component={Wrestling} />
          <Route path="/rating" component={Rating} />
          <Route path="/competitions" exact component={Competitions} />
          <Route
            path="/competitions/:competitions_id"
            render={() => <CompetitionsItem />}
          />
          <Route path="/news" exact component={News} />
          <Route path="/news/:news_id" render={() => <NewsItems />} />
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
