// Loading

export const moviesHaveErrors = (state = false, action) => {
  switch (action.type) {
    case 'MOVIES_HAVE_ERRORS':
      return action.hasErrors
    default:
      return state
  }
}

export const  currentMoviesAreLoading = (state = false, action) => {
  switch (action.type) {
    case 'CURRENT_MOVIES_ARE_LOADING':
      return action.currentMoviesLoading
    default:
      return state
  }
}

export const  popularMoviesAreLoading = (state = false, action) => {
  switch (action.type) {
    case 'POPULAR_MOVIES_ARE_LOADING':
      return action.popularMoviesLoading
    default:
      return state
  }
}

export const  topRatedMoviesAreLoading = (state = false, action) => {
  switch (action.type) {
    case 'TOP_RATED_MOVIES_ARE_LOADING':
      return action.topRatedMoviesLoading
    default:
      return state
  }
}

export const  upcomingMoviesAreLoading = (state = false, action) => {
  switch (action.type) {
    case 'UPCOMING_MOVIES_ARE_LOADING':
      return action.upcomingMoviesLoading
    default:
      return state
  }
}


// Data


export const currentMovies = (state = [], action) => {
  switch (action.type) {
    case 'CURRENT_MOVIES_HAVE_LOADED':
      return action.currentMovies
    default:
      return state
  }
}

export const popularMovies = (state = [], action) => {
  switch (action.type) {
    case 'POPULAR_MOVIES_HAVE_LOADED':
      return action.popularMovies
    default:
      return state
  }
}

export const topRatedMovies = (state = [], action) => {
  switch (action.type) {
    case 'TOP_RATED_MOVIES_HAVE_LOADED':
      return action.topRatedMovies
    default:
      return state
  }
}

export const upcomingMovies = (state = [], action) => {
  switch (action.type) {
    case 'UPCOMING_MOVIES_HAVE_LOADED':
      return action.upcomingMovies
    default:
      return state
  }
}
