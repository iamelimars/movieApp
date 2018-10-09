import {combineReducers} from 'redux';
import { postsHaveErrors, postsAreLoading, posts } from './homeReducer'
import { movieHasErrors, movieIsLoading, movie } from './movieReducer'
import { moviesHaveErrors, currentMoviesAreLoading, popularMoviesAreLoading, topRatedMoviesAreLoading, upcomingMoviesAreLoading, currentMovies, popularMovies, topRatedMovies, upcomingMovies } from './moviesReducer'


export default combineReducers({
  postsHaveErrors,
  postsAreLoading,
  posts,
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
  upcomingMovies
})
