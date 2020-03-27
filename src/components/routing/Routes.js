import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import NotFound from '../layout/NotFound';
// import PrivateRoute from '../routing/PrivateRoute';
import About from '../pages/About';
import Contact from '../pages/Contact';
import GameDetails from '../game/GameDetails';
import AddGame from '../pages/AddGame';
import AllGames from '../pages/AllGames';
import SearchGames from '../pages/SearchGames';





const Routes = () => {
  return (
    <section className="page-section">
      {/* <Alert /> */}
      <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />

        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />


        <Route exact path='/games' component={AllGames} />
        <Route exact path='/games/search' component={SearchGames} />


        <Route exact path='/games/add' component={AddGame} />
        <Route exact path='/games/edit/:id' component={AddGame} />
        <Route exact path='/games/view/:id' component={GameDetails} />


        {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
