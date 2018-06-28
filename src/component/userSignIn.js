import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from '../action/action_user';
import REACT_APP_URL from '../url';

import('../styles/home.css');

class UserSignIn extends Component {
  constructor(props) {
    super(props);
    this.signInSignOut = this.signInSignOut.bind(this);
  }

  componentDidMount() {
    this.props.getUser();
  }

  signInSignOut(user) {
    const login = `${REACT_APP_URL}/auth/login`;
    const logout = `${REACT_APP_URL}/auth/logout`;
    if (user.username === undefined) {
      return (
        <div className="registerSignIn">
          <a
            href="https://github.com/join?source=header-home"
            className="homeSwag"
          >
            Register
          </a>
          <a href={login} className="homeSignIn">
            Sign In
          </a>
        </div>
      );
    } else {
      return (
        <span className="registerSignIn">
          <span className="homeUsername">{user.username}</span>
          <a href={logout} className="homeSignOut">
            Sign Out
          </a>
        </span>
      );
    }
  }

  render() {
    return (
      <div className="searchNavRight">
        <Link to="/shop" className="homeSwag">
          Swag
        </Link>
        {this.signInSignOut(this.props.user)}
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUser
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSignIn);
