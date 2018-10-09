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

export function fetchPosts(url) {
  return (dispatch) => {
    dispatch(postsAreLoading(true))
    return axios.get(url)
                .then((response) => {
                  dispatch(postsAreLoading(false))
                  console.log(response.data.results)
                  dispatch(postsHaveLoaded(response.data.results))

                })
                .catch((error) => {
                  dispatch(postsAreLoading(false))
                  dispatch(postsHaveErrors(true))
                })
  }
}
