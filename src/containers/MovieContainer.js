import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie, fetchMovieInfo } from '../actions/movieActions'
import SingleMovie from '../components/SingleMovie'

class MovieContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchData(`https://api.themoviedb.org/3/movie/${id}?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US`)
    this.props.fetchMovieData(`${id}`)
  }

  render() {

    if (this.props.hasErrors) {
      return (
        <h1>404. Sorry we're having issues connecting</h1>
      )
    }

    if (this.props.isLoading) {
      return (
        <h1>Loading....</h1>
      )
    }


    return(
      <div>
        <SingleMovie genres={this.props.movie.genres} movie={this.props.movie}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
    hasErrors: state.movieHasErrors,
    isLoading: state.movieIsLoading,
    movieTrailers: state.movieTrailers,
    similarMovies: state.similarMovies,
    releaseDates: state.releaseDates,
    movieCredits: state.movieCredits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchMovie(url)),
    fetchMovieData: (id) => dispatch(fetchMovieInfo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
