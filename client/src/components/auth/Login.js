import React, { Component } from "react";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  // onChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);

    fetch("/api/users/login", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(token => {
        if (token.success) {
          console.log("Success:", JSON.stringify(token));
        }
      })
      .catch(err => console.log("Error", JSON.stringify(err)));
  };

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your account</p>
              <form onSubmit={this.onSubmitSignIn}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg")}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onEmailChange}
                  />

                  {/* {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )} */}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onPasswordChange}
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
