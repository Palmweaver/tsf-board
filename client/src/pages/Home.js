import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { Component } from 'react';
import axios from "axios";

class Home extends Component {
  state = {
    error: null
  };
  async login(evt) {
    evt.preventDefault();
    const form = evt.target;
    const inputs = Array.from(form.elements).filter(
      element => element.tagName === "INPUT"
    );
    const email = inputs.map(input => input.value);
    console.log(email);
    try {
      await auth.login(email);
      console.log(email);
    } catch (error) {
      this.setState({
        error: "Your Email is incorrect"
      });
      form.reset();
    }

    const auth = {
      login(email) {
        return axios.post("/api/user", { email }).then(response => {
          return response;
        });
      },
    }
  }

  loginForm (e) {
		e.preventDefault()
		this.props.history.push('/settings');
	}

  render() {
    return (
      <div className="Home-container">
        <form onSubmit={this.loginForm.bind(this)}>
          <h4>Please enter your email address to get started!</h4>
          <input
            className="Email-Address-input"
            placeholder="hello@company.com"
          />
            <button type="submit" className="TSF-button">
              Enter
            </button>
        </form>
      </div>
    );
  }
}

export default Home;