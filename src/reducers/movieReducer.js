export const movieHasErrors = (state = false, action) => {
  switch (action.type) {
    case 'MOVIE_HAS_ERRORS':
      return action.hasErrors
    default:
      return state;
  }
}

export const movieIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'MOVIE_IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const movie = (state = [], action) => {
  switch (action.type) {
    case 'MOVIE_HAS_LOADED':
      return action.movie
    default:
      return state;
  }
}
