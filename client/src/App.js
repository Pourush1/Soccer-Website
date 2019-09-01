import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SoccerPage from "./components/layout/SoccerPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      leagues: []
    };
  }

  componentDidMount() {
    fetch(
      "https://sportsop-soccer-sports-open-data-v1.p.rapidapi.com/v1/leagues",
      {
        method: "get",
        headers: {
          "x-rapidapi-key":
            "099c34f6acmsh07c750b01c740bap1cf4a2jsnd87a2f2e3082",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        //console.log(data.data.leagues);
        this.setState({ leagues: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      //Wrap around Router to make router available to all other components
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={SoccerPage} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
