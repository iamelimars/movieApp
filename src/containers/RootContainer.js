import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import TVShowsContainer from './TVShowsContainer';
import MoviesContainer from './MoviesContainer';
import MovieContainer from './MovieContainer';
import MoviePathContainer from './MoviePathContainer'
import TopNavBar from '../components/common/TopNavBar'
import Footer from '../components/common/Footer'


const RootContainer = () => {
    return (
      <Router>
        <div className="page-wrapper">
          <TopNavBar />
          <div className="page-content">
            <Switch >
              <Redirect from="/" to="/browse" exact/>
              <Route path="/browse" component={HomeContainer} exact/>
              <Route path="/browse/shows" component={TVShowsContainer} exact/>
              <Route path="/shows/:path" component={TVShowsContainer} exact/>
              <Route path="/browse/movies" component={MoviesContainer} exact/>
              <Route path="/movies/:path(popular|toprated|nowplaying|comingsoon)" component={MoviePathContainer} exact/>
              <Route path="/movie/:id" component={MovieContainer} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>

    )
}

export default RootContainer;
