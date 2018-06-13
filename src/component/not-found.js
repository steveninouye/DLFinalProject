import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        {match.url} Is Not Found
        <Link to="/">Go To Kiss I.T.</Link>
      </div>
    );
  }
}

export default NotFound;
