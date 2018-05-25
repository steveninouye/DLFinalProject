import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Home from './component/home';
import Search from './component/search';
import Preview from './component/preview';

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/preview" component={Preview} />
        <Route path="/search" component={Search} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>,
  // </Provider>
  document.getElementById('root')
);
registerServiceWorker();
