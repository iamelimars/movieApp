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

export const movieTrailers = (state = [], action) => {
  switch (action.type) {
    case 'MOVIE_TRAILERS_HAVE_LOADED':
      return action.movieTrailers
    default:
      return state;
  }
}

export const similarMovies = (state = [], action) => {
  switch (action.type) {
    case 'SIMILAR_MOVIES_HAVE_LOADED':
      return action.similarMovies
    default:
      return state;
  }
}

export const releaseDates = (state = [], action) => {
  switch (action.type) {
    case 'RELEASE_DATES_HAVE_LOADED':
      return action.releaseDates
    default:
      return state;
  }
}

export const movieCredits = (state = [], action) => {
  switch (action.type) {
    case 'MOVIE_CREDITS_HAVE_LOADED':
      return action.movieCredits
    default:
      return state;
  }
}
