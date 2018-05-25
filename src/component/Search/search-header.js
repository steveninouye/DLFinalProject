import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchHeader extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-9">
            <Link to="/">KISS I.T.</Link>
          </div>
          <div className="col-1">
            <Link to="/signin">Sign In</Link>
          </div>
          <div className="col-1">
            <Link to="/register">Register</Link>
          </div>
          <div className="col-1">
            <Link to="/shop">Swag</Link>
          </div>
        </div>

        <input type="text" name="search" placeholder="Search Kiss IT" />
      </div>
    );
  }
}

export default SearchHeader;
