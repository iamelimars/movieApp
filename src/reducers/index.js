import {combineReducers} from 'redux';
import { postsHaveErrors, postsAreLoading, posts, shows } from './homeReducer'
import { movieHasErrors, movieIsLoading, movie, movieTrailers, similarMovies, releaseDates, movieCredits } from './movieReducer'
import { moviesHaveErrors, currentMoviesAreLoading, popularMoviesAreLoading, topRatedMoviesAreLoading, upcomingMoviesAreLoading, currentMovies, popularMovies, topRatedMovies, upcomingMovies } from './moviesReducer'
import { searchModalIsOpen } from './navbarReducer'


export default combineReducers({
  postsHaveErrors,
  postsAreLoading,
  posts,
  shows,
  movieHasErrors,
  movieIsLoading,
  movie,
  moviesHaveErrors,
  currentMoviesAreLoading,
  popularMoviesAreLoading,
  topRatedMoviesAreLoading,
  upcomingMoviesAreLoading,
  currentMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  movieTrailers,
  similarMovies,
  releaseDates,
  movieCredits,
  searchModalIsOpen
})
