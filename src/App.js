import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Routes from './components/routing/Routes';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store/store';
import { loadUser } from './store/actions/auth';
import setAuthToken from './utils/setAuthToken';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => { 
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <NotificationContainer/>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Routes} />

        </Switch>

      <Footer />

      </Fragment>
    </Router>
  </Provider>
)};

export default App;
