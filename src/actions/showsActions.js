import axios from 'axios'

export function showsHaveErrors(bool){
  return {
    type: 'SHOWS_HAVE_ERRORS',
    hasErrors: bool
  }
}

export function showsAreLoading(bool){
  return {
    type: 'SHOWS_ARE_LOADING',
    showsAreLoading: bool
  }
}


export function popularShowsHaveLoaded(popularShows) {
  return {
    type: 'POPULAR_SHOWS_HAVE_LOADED',
    popularShows: popularShows
  }
}

export function topRatedShowsHaveLoaded(topRatedShows) {
  return {
    type: 'TOP_RATED_SHOWS_HAVE_LOADED',
    topRatedShows: topRatedShows
  }
}



export function onTheAirShowsHaveLoaded(onTheAirShows) {
  return {
    type: 'ON_THE_AIR_SHOWS_HAVE_LOADED',
    onTheAirShows: onTheAirShows
  }
}

export function airingTodayShowsHaveLoaded(airingTodayShows) {
  return {
    type: 'AIRING_TODAY_SHOWS_HAVE_LOADED',
    airingTodayShows: airingTodayShows
  }
}


export function getAllShows() {
  return (dispatch) => {
    dispatch(showsAreLoading(true))
    return axios.all([
      axios.get('https://api.themoviedb.org/3/tv/popular?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1'),
      axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1'),
      axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1'),
      axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1')
    ])
    .then(axios.spread((popularRes, topRatedRes, onTheAirRes, airingTodayRes) => {
      dispatch(showsAreLoading(false))
      dispatch(popularShowsHaveLoaded(popularRes.data.results))
      dispatch(topRatedShowsHaveLoaded(topRatedRes.data.results))
      dispatch(onTheAirShowsHaveLoaded(onTheAirRes.data.results))
      dispatch(airingTodayShowsHaveLoaded(airingTodayRes.data.results))
    }))
  }
}
