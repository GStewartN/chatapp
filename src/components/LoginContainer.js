import React from 'react';
import Header from './Header';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render () {
    return (
      <div id="LoginContainer" className="inner-container">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <p>Sign in or sign up by entering your email and password.</p>
          <input
            name="email"
            type="text"
            onChange={this.handleInputChange}
            value={this.state.email}
            placeholder="Your Email"/>
          <input
            name="password"
            type="password"
            onChange={this.handleInputChange}
            value={this.state.password}
            placeholder="Your Password"/>
          <button className="red light" type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
