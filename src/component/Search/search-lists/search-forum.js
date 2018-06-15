import React, { Component } from 'react';
import { connect } from 'react-redux';

import Forum from './forum/forum';

class SearchForum extends Component {
  constructor(props) {
    super(props);
    this.state = { forums: false };
  }

  componentDidMount() {
    this.setState({ forums: this.props.forumSearchResults });
  }

  render() {
    const { forums } = this.state;
    if (!forums) {
      return <div>Loading...</div>;
    } else {
      return forums.map((forum, index) => (
        <Forum
          key={forum.question_id}
          index={index}
          history={this.props.history}
          forum={forum}
        />
      ));
    }
  }
}

function mapStateToProps({ searchInput, forumSearchResults }) {
  return { searchInput, forumSearchResults };
}

export default connect(mapStateToProps)(SearchForum);
