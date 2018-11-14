export const showsHaveErrors = (state = false, action) => {
  switch (action.type) {
    case 'SHOWS_HAVE_ERRORS':
      return action.hasErrors
    default:
      return state
  }
}

export const showsAreLoading = (state = false, action) => {
  switch (action.type) {
    case 'SHOWS_ARE_LOADING':
      return action.showsAreLoading
    default:
      return state
  }
}

export const popularShows = (state = [], action) => {
  switch (action.type) {
    case 'POPULAR_SHOWS_HAVE_LOADED':
      return action.popularShows
    default:
      return state
  }
}

export const topRatedShows = (state = [], action) => {
  switch (action.type) {
    case 'TOP_RATED_SHOWS_HAVE_LOADED':
      return action.topRatedShows
    default:
      return state
  }
}

export const onTheAirShows = (state = [], action) => {
  switch (action.type) {
    case 'ON_THE_AIR_SHOWS_HAVE_LOADED':
      return action.onTheAirShows
    default:
      return state
  }
}

export const airingTodayShows = (state = [], action) => {
  switch (action.type) {
    case 'AIRING_TODAY_SHOWS_HAVE_LOADED':
      return action.airingTodayShows
    default:
      return state
  }
}
