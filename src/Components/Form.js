import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      Email: '',
      confirmEmail: '',
      password: '',
      firstNameErr: '',
      lastNameErr: '',
      EmailErr: '',
      confirmEmailErr: '',
      passwordErr: '',
    };
    this.changeInputHandler = this.changeInputHandler.bind(this);
    this.formHandler = this.formHandler.bind(this);
    // this.lastNameHandler = this.lastNameHandler.bind(this);
  }

  changeInputHandler(event) {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  }

  formHandler(event) {
    console.log('click');
    this.setState({
      firstName: '',
      lastName: '',
      Email: '',
      confirmEmail: '',
      password: '',
      firstNameErr: '',
      lastNameErr: '',
      EmailErr: '',
      confirmEmailErr: '',
      passwordErr: '',
    });

    if (this.state.firstName === '') {
      console.log('first name required');
      this.setState({
        firstNameErr: 'first name required',
      });
    } else if (this.state.firstName.length <= 2) {
      console.log('too short');
      this.setState({
        firstNameErr: 'minimum 3 characters required',
      });
    }
    const regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const iscorrectEmail = regexEmail.test(this.state.Email);

    if (this.state.Email === '') {
      console.log('Email required');
      this.setState({
        EmailErr: 'Email required',
      });
    } else if (iscorrectEmail === false) {
      this.setState({
        EmailErr: 'invalid email format',
      });
    }
    if (this.state.lastName === '') {
      console.log('last name required');
      this.setState({
        lastNameErr: 'last name required',
      });
    } else if (this.state.lastName.length < 2) {
      this.setState({
        lastNameErr: 'minimum 3 characters required',
      });
    }
    if (this.state.confirmEmail === '') {
      this.setState({
        confirmEmailErr: 'please confirm your email',
      });
    } else if (this.state.confirmEmail !== this.state.Email) {
      this.setState({
        confirmEmailErr: 'email does not match',
      });
    }
    if (this.state.password === '') {
      this.setState({
        passwordErr: 'please enter your password',
      });
    } else if (this.state.password.length <= 5) {
      this.setState({
        confirmEmailErr: 'minimum 5 characters required',
      });
    }
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <h2>Sign Up</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.changeInputHandler}
            />
            <p>{this.state.firstNameErr}</p>
      

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.changeInputHandler}
          />
          <p>{this.state.lastNameErr}</p>

          <input
            type="text"
            name="Email"
            placeholder="Email"
            value={this.state.Email}
            onChange={this.changeInputHandler}
            />
            <p>{this.state.EmailErr}</p>

          <input
            type="text"
            name="confirmEmail"
            placeholder="Confirm Email"
            value={this.state.confirmEmail}
            onChange={this.changeInputHandler}
          />
          <p>{this.state.confirmEmailErr}</p>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.changeInputHandler}
          />
          <p>{this.state.passwordErr}</p>
        </form>
        <button className="form-btn" onClick={this.formHandler}>
          send
        </button>
      </div>
    );
  }
}

export default Form;
