import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    } else {
      alert("Both fields must be filled in.")
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              onChange={this.handleInputChanges}
              id="username"
              name="username"
              type="text"
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={this.handleInputChanges}
              id="password"
              name="password"
              type="password"
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
