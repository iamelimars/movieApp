import axios from 'axios'

export function moviePathHasError(bool){
  return {
    type: 'MOVIE_PATH_HAS_ERRORS',
    hasErrors: bool
  }
}
