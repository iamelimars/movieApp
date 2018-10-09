import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../actions/moviesActions'
import MoviesRow from '../components/common/MoviesRow'

class MoviesContainer extends Component {
  componentDidMount() {
    this.props.fetchCurrentMovies('https://api.themoviedb.org/3/movie/now_playing?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1')
    this.props.fetchPopularMovies('https://api.themoviedb.org/3/movie/popular?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1')
    this.props.fetchTopRatedMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1')
    this.props.fetchUpcomingMovies('https://api.themoviedb.org/3/movie/upcoming?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1')
    const { path } = this.props.match.params;
    switch (path) {
      case 'nowplaying':
        console.log('Showing now playing movies');
        break;
      case 'popular':
        console.log('Showing Popular movies');
        break;
      case 'toprated':
        console.log('Showing top rated movies');
        break;
      case 'upcoming':
        console.log('Showing upcoming movies');
        break;
      default:
        console.log('Wrong path, Redirect to popular movies');
    }
  }
  render() {
    return(
      <div style={containerStyle}>
        <MoviesRow  rowTitle="Now Playing" movies={this.props.currentMovies} className="currentMovie"/>
        {/* <MoviesRow rowTitle="Most Popular" movies={this.props.popularMovies} className="popularMovies"/>
        <MoviesRow rowTitle="Top Rated" movies={this.props.topRatedMovies} className="topRatedMovies"/>
        <MoviesRow rowTitle="Coming Soon" movies={this.props.upcomingMovies} className="upcomingMovies"/> */}
      </div>
    )
  }
}

const containerStyle = {
  display: 'flex',
  flexWrap:'wrap',
  justifyContent: 'center',
  alignItems: 'center'
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
    fetchUpcomingMovies: (url) => dispatch(getUpcomingMovies(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
