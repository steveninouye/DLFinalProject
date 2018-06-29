import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SearchCode from './search-lists/search-code';
import SearchDoc from './search-lists/search-doc';
import SearchForum from './search-lists/search-forum';
import SearchVideo from './search-lists/search-video';

class SearchList extends Component {
  render() {
    return (
      <Tabs className="searchTabs">
        <TabList className="tabbyList">
          <Tab className="tabby" selectedClassName="selectedTab">
            Code
          </Tab>
          <Tab className="tabby" selectedClassName="selectedTab">
            Docs
          </Tab>
          <Tab className="tabby" selectedClassName="selectedTab">
            Video
          </Tab>
          <Tab className="tabby" selectedClassName="selectedTab">
            Forum
          </Tab>
        </TabList>
        <TabPanel selectedClassName="tabPanel">
          <SearchCode history={this.props.history} />
        </TabPanel>
        <TabPanel selectedClassName="tabPanel">
          <SearchDoc history={this.props.history} />
        </TabPanel>
        <TabPanel selectedClassName="tabVideoPanel">
          <SearchVideo history={this.props.history} />
        </TabPanel>
        <TabPanel selectedClassName="tabPanel">
          <SearchForum history={this.props.history} />
        </TabPanel>
      </Tabs>
    );
  }
}

export default SearchList;
