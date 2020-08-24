import React from 'react'
import NavBar from './components/NavBar/index'
import Footer from './components/Footer/index'
import Slider from './components/Slider/index'
import AllDirective from './components/Directives/AllDirective'
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
            <Route path="/teams" component={AllDirective} />
            {/* <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route> */}
            <Route exact path="/" component={Slider} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;