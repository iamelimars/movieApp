import React, {Component} from 'react'
import { Col, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class HomePage extends Component {

  render () {
    let SingleMovieStyle = {}

    if (this.props.headerMovie) {

      SingleMovieStyle = {
        height: "100vh",
        width: "100vw",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${this.props.headerMovie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }
    }

    if (!this.props.movies) {
      return (
        <div>

        </div>
      )
    }

    return (
        <div className="home-styles">
          <div style={SingleMovieStyle}>
            <div className="singleMovieHero container">

            </div>
          </div>
          <div className="container">
            <div className="row">
              <h3>Movies</h3>
              {this.props.movies.slice(1,13).map((movie) => (
                <Col className="movie-thumbnail" lg={2} md={3} sm={4} xs={6} key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} alt=""/>
                  {movie.title.length > 25 &&
                    <h5>{movie.title.substr(0,25)}...</h5>
                  }
                  {movie.title.length < 25 &&
                    <h5>{movie.title}</h5>
                  }
                  <p >{movie.release_date}  <Badge>{movie.vote_average}</Badge></p>
                </Col>
              ))}
              <Link className="col-xs-12" to={'/browse/movies'}>See More Movies</Link>
            </div>
            <div className="row">
              <h3>TV Shows</h3>
              {this.props.shows.slice(0,12).map((show) => (
                <Col className="movie-thumbnail" lg={2} md={3} sm={4} xs={6} key={show.id}>
                  <img src={`https://image.tmdb.org/t/p/w154${show.poster_path}`} alt=""/>
                  {show.name.length > 20 &&
                    <h5>{show.name.substr(0,20)}...</h5>
                  }
                  {show.name.length < 20 &&
                    <h5>{show.name}</h5>
                  }
                  <p >{show.first_air_date}  <Badge>{show.vote_average}</Badge> </p>
                </Col>
              ))}
              <Link className="col-xs-12" to={'/browse/shows'}>See More Shows</Link>
            </div>
          </div>
        </div>
    )
  }

}


export default HomePage
