import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white text-center mt-5 p-4 ">
        Copyright &copy; {new Date().getFullYear()} Soccer Website
      </footer>
    );
  }
}

export default Footer;
