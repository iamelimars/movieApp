import axios from 'axios'

export function moviesHaveErrors(bool){
  return {
    type: 'MOVIES_HAVE_ERRORS',
    hasErrors: bool
  }
}

export function currentMoviesAreLoading(bool){
  return {
    type: 'CURRENT_MOVIES_ARE_LOADING',
    currentMoviesLoading: bool
  }
}
export function popularMoviesAreLoading(bool){
  return {
    type: 'POPULAR_MOVIES_ARE_LOADING',
    popularMoviesLoading: bool
  }
}
export function topRatedMoviesAreLoading(bool){
  return {
    type: 'TOP_RATED_MOVIES_ARE_LOADING',
    topRatedMoviesLoading: bool
  }
}
export function upcomingMoviesAreLoading(bool){
  return {
    type: 'UPCOMING_MOVIES_ARE_LOADING',
    upcomingMoviesLoading: bool
  }
}




export function currentMoviesHaveLoaded(currentMovies) {
  return {
    type: 'CURRENT_MOVIES_HAVE_LOADED',
    currentMovies: currentMovies
  }
}
export function popularMoviesHaveLoaded(popularMovies) {
  return {
    type: 'POPULAR_MOVIES_HAVE_LOADED',
    popularMovies: popularMovies
  }
}
export function topRatedMoviesHaveLoaded(topRatedMovies) {
  return {
    type: 'TOP_RATED_MOVIES_HAVE_LOADED',
    topRatedMovies: topRatedMovies
  }
}
export function upcomingMoviesHaveLoaded(upcomingMovies) {
  return {
    type: 'UPCOMING_MOVIES_HAVE_LOADED',
    upcomingMovies: upcomingMovies
  }
}




export function getCurrentMovies(url) {
  return (dispatch) => {
    dispatch(currentMoviesAreLoading(true))
    return axios.get(url)
                .then((response) => {
                  // console.log(response.data.results)
                  dispatch(currentMoviesAreLoading(false))
                  dispatch(currentMoviesHaveLoaded(response.data.results))
                })
                .catch((error) => {
                  console.log(error)
                  dispatch(currentMoviesAreLoading(false))
                  dispatch(moviesHaveErrors(true))
                })
  }
}
export function getPopularMovies(url) {
  return (dispatch) => {
    dispatch(popularMoviesAreLoading(true))
    return axios.get(url)
                .then((response) => {
                  // console.log(response.data.results)
                  dispatch(popularMoviesAreLoading(false))
                  dispatch(popularMoviesHaveLoaded(response.data.results))
                })
                .catch((error) => {
                  console.log(error)
                  dispatch(popularMoviesAreLoading(false))
                  dispatch(moviesHaveErrors(true))
                })
  }
}
export function getTopRatedMovies(url) {
  return (dispatch) => {
    dispatch(topRatedMoviesAreLoading(true))
    return axios.get(url)
                .then((response) => {
                  // console.log(response.data.results)
                  dispatch(topRatedMoviesAreLoading(false))
                  dispatch(topRatedMoviesHaveLoaded(response.data.results))
                })
                .catch((error) => {
                  console.log(error)
                  dispatch(topRatedMoviesAreLoading(false))
                  dispatch(moviesHaveErrors(true))
                })
  }
}
export function getUpcomingMovies(url) {
  return (dispatch) => {
    dispatch(upcomingMoviesAreLoading(true))
    return axios.get(url)
                .then((response) => {
                  // console.log(response.data.results)
                  dispatch(upcomingMoviesAreLoading(false))
                  dispatch(upcomingMoviesHaveLoaded(response.data.results))
                })
                .catch((error) => {
                  dispatch(upcomingMoviesAreLoading(false))
                  console.log(error)
                  dispatch(moviesHaveErrors(true))
                })
  }
}

export function getAllMovies(){
  return (dispatch) => {
    dispatch(currentMoviesAreLoading(true))
    return axios.all([
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1'),
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1'),
      axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1'),
      axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1')
    ])
    .then(axios.spread((popularRes, topRatedRes, nowPlayingRes, upcomingRes) => {
      dispatch(currentMoviesAreLoading(false))
      dispatch(popularMoviesHaveLoaded(popularRes.data.results))
      dispatch(topRatedMoviesHaveLoaded(topRatedRes.data.results))
      dispatch(currentMoviesHaveLoaded(nowPlayingRes.data.results))
      dispatch(upcomingMoviesHaveLoaded(upcomingRes.data.results))
    }))
  }
}
