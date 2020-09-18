import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import authService from "../../services/authService"

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const {email, pw} = this.state
    return (
      <main >
        <div className="card">
        <h3>Log In or Sign Up</h3>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
        <label className="text" htmlFor="email">Email</label>
        <br/>
          <input classNam="email"
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          <br/>
          <label className="text" htmlFor="password">Password</label>
          <br/>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
          />
          <br/>
          <button className="btn btn-success">Log In</button>
          <Link className="btn red" to="/index">
            </Link>
          <br/>
          <button type="button" class="btn btn-danger">Sign Up</button>
        </form>
        </div>
      </main>
    );
  }
}

export default LoginPage;
