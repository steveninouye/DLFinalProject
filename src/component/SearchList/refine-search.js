import React, { Component } from 'react';

class RefineSearch extends Component {
  render() {
    return (
      <div className="col-2">
        <input id="searchList1" type="checkbox" />
        <label htmlFor="searchList1">MY I.T.</label>
        <br />
        <input id="searchList2" type="checkbox" />
        <label htmlFor="searchList2">FOLLOWING I.T.</label>
        <br />
        <input id="searchList3" type="checkbox" />
        <label htmlFor="searchList3">KISS I.T.</label>
      </div>
    );
  }
}

export default RefineSearch;
