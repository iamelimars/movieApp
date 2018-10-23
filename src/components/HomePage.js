import React, {Component} from 'react'
import { Col } from 'react-bootstrap'


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
              {this.props.movies.slice(0,6).map((movie) => (
                <Col md={2} key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} alt=""/>
                </Col>

              ))}
            </div>
          </div>
        </div>
    )
  }

}

// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 101, 105, 2, 3, 4, 5, 6, 7, 8, 9, 101, 'test']




export default HomePage
