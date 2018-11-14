import React from 'react'
import MovieImgCard from './MovieImgCard'

const MovieBrowseSection = ({movies, title}) => {
  return (
    <div className="home-styles">
      <div className="container">
        <div className="row">
          <h1>{title}</h1>
            {movies.slice(0,12).map((movie) => (
              <MovieImgCard key={movie.id} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default MovieBrowseSection
