import React from 'react'
import { Col, ButtonToolbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleMovie = ({movie, genres}) => {

  let SingleMovieStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }


  if (!genres && movie) {
    return (
      <div></div>
    )
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
          <ButtonToolbar>
            {genres.map((genre) => (
              <Button className="genre-button" key={genre.id}>
                <Link to={`/browse/genre/${genre.id}`}>{genre.name}</Link>
              </Button>
            ))}
        </ButtonToolbar>
          <p>{movie.overview}</p>
          <h4><i className="fas fa-star"></i> <strong>{movie.vote_average * 10}%</strong> <small>User Rating</small>  </h4>
        </Col>
      </div>

    </div>
  )
}

export default SingleMovie
