export const postsHaveErrors = (state = false, action) => {
  switch (action.type) {
    case 'POSTS_HAVE_ERRORS':
      return action.hasErrors;
    default:
      return state;
  }
}

export const postsAreLoading = (state = false, action) => {
  switch (action.type) {
    case 'POSTS_ARE_LOADING':
      return action.isLoading
    default:
      return state;
  }
}

export const posts = (state = [], action) => {
  switch (action.type) {
    case 'POSTS_HAVE_LOADED':
      return action.posts
    default:
      return state;
  }
}
