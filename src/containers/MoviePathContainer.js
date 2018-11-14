import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getCurrentMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, getAllMovies } from '../actions/moviesActions'
import MoviePathPage from '../components/MoviePathPage'




class MoviePathContainer extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      movies: [],
      page: ''
    }
  }

  componentDidMount() {
    this.props.fetchAllMovies().then(()=>{
      console.log(this.props.popularMovies);
      console.log(this.props.topRatedMovies);
      console.log(this.props.currentMovies);
      console.log(this.props.upcomingMovies);
    })
  }


  render() {

    let param = this.props.match.params.path

    switch (param) {
      case 'popular':
        return (
          <MoviePathPage movies={this.props.popularMovies} title="Most Popular" />
        )
      case 'toprated':
        return (
          <MoviePathPage movies={this.props.topRatedMovies} title="Top Rated" />
        )
      case 'nowplaying':
        return (
          <MoviePathPage movies={this.props.currentMovies} title="Now Playing" />
        )
      case 'comingsoon':
        return (
          <MoviePathPage movies={this.props.upcomingMovies} title="Coming Soon" />
        )
      default:
        return (
          <h1>Loading</h1>
        )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    hasErrors: state.hasErrors,
    currentMoviesLoading: state.currentMoviesLoading,
    popularMoviesLoading: state.popularMoviesLoading,
    topRatedMoviesLoading: state.topRatedMoviesLoading,
    upcomingMoviesLoading: state.upcomingMoviesLoading,
    currentMovies: state.currentMovies,
    popularMovies: state.popularMovies,
    topRatedMovies: state.topRatedMovies,
    upcomingMovies: state.upcomingMovies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentMovies: (url) => dispatch(getCurrentMovies(url)),
    fetchPopularMovies: (url) => dispatch(getPopularMovies(url)),
    fetchTopRatedMovies: (url) => dispatch(getTopRatedMovies(url)),
    fetchUpcomingMovies: (url) => dispatch(getUpcomingMovies(url)),
    fetchAllMovies: () => dispatch(getAllMovies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePathContainer);
