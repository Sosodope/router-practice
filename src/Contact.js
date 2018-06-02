import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <form className="login-form">
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <input type="submit" value="Submit" className="btn" />
      </form>
    );
  }
}

export default Contact;
