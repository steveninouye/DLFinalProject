import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import reducers from './reducer';
import Home from './component/home';
import Shop from './component/shop';
import Search from './component/search';
import Preview from './component/preview';
import NotFound from './component/not-found';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route path="/preview" component={Preview} />
          <Route path="/search" component={Search} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
