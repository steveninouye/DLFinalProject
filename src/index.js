import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducer';
import Home from './component/home';
import Search from './component/search';
import Preview from './component/preview';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/preview/:index" component={Preview} />
          <Route path="/search" component={Search} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
registerServiceWorker();
