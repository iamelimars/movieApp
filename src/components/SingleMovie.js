import React from 'react'
import { Col, ButtonToolbar, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleMovie = ({movie, genres, movieTrailers, similarMovies, releaseDates, cast, crew, show, handleShow, handleClose}) => {

  let SingleMovieStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }
  console.log(show);



  if (!genres && !movie ) {
    return (
      <div></div>
    )
  }

if (!cast ) {
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
          <a className="poster-button" onClick={handleShow}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt=""/>
          </a>

          <Modal bsSize="large" show={show} onHide={handleClose}>
            <iframe id="ytplayer" type="text/html"
              src={`https://www.youtube.com/embed/${movieTrailers[0].key}?autoplay=1`}
              frameBorder="0" allowFullscreen></iframe>
          </Modal>
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
          <Button className="trailer-button col-xs-4" bsStyle="primary" onClick={handleShow}>
            Trailer
          </Button>
        </Col>
      </div>
      <Col className="movie-info-section container">
        <Col xs={12}>
          <h4>Cast</h4>
          <div className="row thumbnail-row">
          {cast.slice(0, 6).map((member) => (
            <Col key={member.id} xs={6} sm={4} md={2}>
              <div className="thumbnail hidden-xs">
                <img className="profile-pic" src={`https://image.tmdb.org/t/p/w185${member.profile_path}`} alt=""/>
                <div className="caption">
                  <h5 className="text-center"> {member.name} </h5>
                </div>
              </div>

              <div className="thumbnail visible-xs">
                <img className="small-profile-pic" src={`https://image.tmdb.org/t/p/w185${member.profile_path}`} alt=""/>
                <div className="caption">
                  <h5> {member.name} </h5>
                </div>
              </div>
            </Col>
          ))}
        </div>
        </Col>
        <Col xs={12}>
          <h4>Movies You May Like</h4>
          <div className="row">
            {similarMovies.slice(0,6).map((similarMovie) => (
              <Col key={similarMovie.id} xs={6} sm={4} md={2}>
                <div className="thumbnail">
                  <Link to={`/movie/${similarMovie.id}`}>
                    <img className="" src={`https://image.tmdb.org/t/p/w185${similarMovie.poster_path}`} alt=""/>
                  </Link>
                </div>
              </Col>
            ))}
          </div>
        </Col>
      </Col>



    </div>
  )
}

export default SingleMovie
