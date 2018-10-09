import React from 'react'

const SingleMovie = ({movie}) => {
  return (
    <div>

      {movie.title}
      <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt=""/>
      {movie.overview}
    </div>
  )
}

export default SingleMovie
