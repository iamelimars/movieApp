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
