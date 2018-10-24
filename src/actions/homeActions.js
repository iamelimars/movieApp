import axios from 'axios';

export function postsHaveErrors(bool){
  return {
    type: 'POSTS_HAVE_ERRORS',
    hasErrors: bool
  }
}

export function postsAreLoading(bool){
  return {
    type: 'POSTS_ARE_LOADING',
    isLoading: bool
  }
}

export function postsHaveLoaded(posts){
  return {
    type: 'POSTS_HAVE_LOADED',
    posts: posts
  }
}

export function showsHaveLoaded(shows){
  return {
    type: 'SHOWS_HAVE_LOADED',
    shows: shows
  }
}

export function fetchPosts(url) {
  return (dispatch) => {
    dispatch(postsAreLoading(true))

    return axios.all([
      axios.get(url),
      axios.get('https://api.themoviedb.org/3/tv/popular?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1')
    ])
    .then(axios.spread((movieRes, showRes)=> {
      dispatch(postsAreLoading(false))
      dispatch(postsHaveLoaded(movieRes.data.results))
      dispatch(showsHaveLoaded(showRes.data.results))
    }))
    .catch((error) => {
      dispatch(postsHaveErrors(true))
      dispatch(postsAreLoading(false))
    })
  }
}
