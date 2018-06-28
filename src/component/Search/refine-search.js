import React, { Component } from 'react';

class RefineSearch extends Component {
  render() {
    return (
      <div className="refineSearch">
        <div className="refineCheckBox">
          <input id="searchList1" type="checkbox" />
          <label htmlFor="searchList1">MY I.T.</label>
        </div>
        <br />
        <div className="refineCheckBox">
          <input id="searchList2" type="checkbox" />
          <label htmlFor="searchList2">FOLLOWING I.T.</label>
        </div>
        <br />
        <div className="refineCheckBox">
          <input id="searchList3" type="checkbox" />
          <label htmlFor="searchList3">KISS I.T.</label>
        </div>
      </div>
    );
  }
}

export default RefineSearch;
