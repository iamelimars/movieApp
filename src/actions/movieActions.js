import axios from 'axios';

export function movieHasErrors(bool){
  return {
    type: 'MOVIE_HAS_ERRORS',
    hasErrors: bool
  }
}

export function movieIsLoading(bool) {
  return {
    type: 'MOVIE_IS_LOADING',
    isLoading: bool
  }
}

export function movieHasLoaded(movie) {
  return {
    type: 'MOVIE_HAS_LOADED',
    movie: movie
  }
}

export function movieTrailersHaveLoaded(movieTrailers) {
  return {
    type: 'MOVIE_TRAILERS_HAVE_LOADED',
    movieTrailers: movieTrailers
  }
}

export function similarMoviesHaveLoaded(similarMovies) {
  return {
    type: 'SIMILAR_MOVIES_HAVE_LOADED',
    similarMovies: similarMovies
  }
}

export function releaseDatesHaveLoaded(releaseDates) {
  return {
    type: 'RELEASE_DATES_HAVE_LOADED',
    releaseDates: releaseDates
  }
}

export function movieCreditsHaveLoaded(movieCredits) {
  return {
    type: 'MOVIE_CREDITS_HAVE_LOADED',
    movieCredits: movieCredits
  }
}

export function fetchMovieInfo(id) {
  return (dispatch) => {
    return axios.all([
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US`),
      axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1`),
      axios.get(`https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=dfd4beb735b2271820aa9fe51b6fe1cb`),
      axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=dfd4beb735b2271820aa9fe51b6fe1cb`)
    ])
    .then(axios.spread((trailerRes, similarRes, releaseRes, creditsRes) => {
        dispatch(movieTrailersHaveLoaded(trailerRes.data))
        dispatch(similarMoviesHaveLoaded(similarRes.data))
        dispatch(releaseDatesHaveLoaded(releaseRes.data))
        dispatch(movieCreditsHaveLoaded(creditsRes.data))
    }))
  }
}

export function fetchMovie(url) {
  return (dispatch) => {
    dispatch(movieIsLoading(true))
    return axios.get(url)
                .then((response) => {
                  dispatch(movieIsLoading(false))
                  console.log(response.data)
                  dispatch(movieHasLoaded(response.data))
                })
                .catch((error) => {
                  console.log(error);
                  dispatch(movieIsLoading(false))
                  dispatch(movieHasErrors(true))
                })
  }
}
