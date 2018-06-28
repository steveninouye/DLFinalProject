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
        <TabPanel className="tabPanel">
          <SearchCode history={this.props.history} />
        </TabPanel>
        <TabPanel className="tabPanel">
          <SearchDoc history={this.props.history} />
        </TabPanel>
        <TabPanel className="tabPanel">
          <SearchVideo history={this.props.history} />
        </TabPanel>
        <TabPanel className="tabPanel">
          <SearchForum history={this.props.history} />
        </TabPanel>
      </Tabs>
    );
  }
}

export default SearchList;
