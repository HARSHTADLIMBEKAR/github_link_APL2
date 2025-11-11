import React, { Component } from "react";

class RegistrationClass extends Component {
  state = { name: "", email: "", password: "" };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = (e) => { e.preventDefault(); alert(JSON.stringify(this.state, null, 2)); };
  render() {
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Registration (Class)</h2>
        <input name="name" value={name} onChange={this.handleChange} placeholder="Name" />
        <input name="email" value={email} onChange={this.handleChange} placeholder="Email" type="email" />
        <input name="password" value={password} onChange={this.handleChange} placeholder="Password" type="password" />
        <button type="submit">Register</button>
      </form>
    );
  }
}
export default RegistrationClass;
