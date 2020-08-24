import React from 'react'
import NavBar from './components/NavBar/index'
import Footer from './components/Footer/index'
import Slider from './components/Slider/index'
import AllTeam from './components/Teams/AllTeam'
import AboutUs from './components/AboutUs/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Slider} />
            <Route path="/teams" component={AllTeam} />
            <Route path="/aboutus" component={AboutUs} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;