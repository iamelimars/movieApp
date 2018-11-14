import React, { Component } from 'react'
import MovieImgCard from './common/MovieImgCard'


class MoviePathPage extends Component {
  render() {
    return (
      <div className="home-styles">
        <div className="container">
          <div className="row">
            <h1>{this.props.title}</h1>
              {this.props.movies.map((movie) => (
                <MovieImgCard movie={movie} />
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MoviePathPage
