import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import TVShowsContainer from './TVShowsContainer';
import MoviesContainer from './MoviesContainer';
import MovieContainer from './MovieContainer';


const RootContainer = () => {
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/browse" exact/>
          <Route path="/browse" component={HomeContainer} exact/>
          <Route path="/browse/shows" component={TVShowsContainer} exact/>
          <Route path="/browse/movies" component={MoviesContainer} exact/>
          <Route path="/browse/movies/:path" component={MoviesContainer} exact/>

          <Route path="/movie/:id" component={MovieContainer} />
        </Switch>
      </Router>

    )
}

export default RootContainer;