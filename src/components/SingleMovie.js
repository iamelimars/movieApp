import React from 'react'
import { Col } from 'react-bootstrap'

const SingleMovie = ({movie}) => {

  let SingleMovieStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }

  return (
    <div className="singleMovie">
      <div style={SingleMovieStyle}>
        <div className="singleMovieHero container">

        </div>
      </div>
      <div className="movieInfoHero container">
        <Col sm={6} md={4}>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt=""/>
        </Col>
        <Col className="movieTitle" sm={6} md={6}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </Col>
      </div>

    </div>
  )
}

export default SingleMovie
