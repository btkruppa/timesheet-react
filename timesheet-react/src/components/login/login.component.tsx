import * as React from 'react';
import * as userClient from '../../api/user.client';
import { Credential } from '../../model/credential';

export class LoginComponent extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e) {
    console.log(JSON.stringify(e.target.value))
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const credentials = new Credential(this.state.username, this.state.password);
    userClient.login(credentials)
      .then((token) => {
        console.log(JSON.stringify(token));
        // localStorage.setItem('auth-token', token);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public render() {
    return (
      <div className="text-center signin-container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input name="username" type="text" id="username" className="form-control" onChange={this.onChange} placeholder="Email address" required />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input name="password" type="password" id="inputPassword" className="form-control" onChange={this.onChange} placeholder="Password" required />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </form>
      </div>
    );
  }
};
