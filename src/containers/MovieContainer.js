import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie, fetchMovieInfo } from '../actions/movieActions'
import SingleMovie from '../components/SingleMovie'

class MovieContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchData(`https://api.themoviedb.org/3/movie/${id}?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US`)
    this.props.fetchMovieData(`${id}`)
  }



  componentDidUpdate(prevProps) {
    let oldId = prevProps.match.params.id
    let newId = this.props.match.params.id
    if (newId !== oldId) {
      this.props.fetchData(`https://api.themoviedb.org/3/movie/${newId}?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US`)
      this.props.fetchMovieData(`${newId}`)
    }
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
        <SingleMovie show={this.state.show} handleShow={this.handleShow} handleClose={this.handleClose} movieTrailers={this.props.movieTrailers.results} similarMovies={this.props.similarMovies.results} releaseDates={this.props.releaseDates} cast={this.props.movieCredits.cast} crew={this.props.movieCredits.crew} genres={this.props.movie.genres} movie={this.props.movie}/>
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
