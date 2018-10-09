import React, {Component} from 'react'
import MovieCard from './MovieCard'

const movieSection = {
  backgroundColor: 'transparent',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexWrap:'wrap',
  justifyContent: 'center',
  alignItems: 'center'
}

const titleHeader = {
  width: '100vw',
  textAlign: 'center'
}

class MoviesRow extends Component {
  // console.log(this.props.movies);
  componentDidMount () {
  }
  render() {
    if (this.props.movies===[]) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
    return (
      <section className="card" style={movieSection}>
        <h1 style={titleHeader}>{this.props.rowTitle}</h1>
        {this.props.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    )
  }
}

export default MoviesRow
