import React, { Component } from "react";
import { Link } from "react-router-dom";

class SoccerPage extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">
                  Welcome to the world of Soccer
                </h1>
                <p className="lead">
                  {" "}
                  A website to get all your news about Soccer and the games
                  around the world.
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SoccerPage;
