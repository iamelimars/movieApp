import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, getAllMovies } from '../actions/moviesActions'
import MovieBrowseSection from '../components/common/MovieBrowseSection'

class MoviesContainer extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.fetchAllMovies().then(()=>{
      console.log(this.props.popularMovies);
      console.log(this.props.topRatedMovies);
      console.log(this.props.currentMovies);
      console.log(this.props.upcomingMovies);
      this.setState({loaded: true})
    })
  }
  render() {
    if (this.state.loaded === false) {
      return (
        <div>Loading</div>
      )
    }
    return(

      <div className="container">
        <MovieBrowseSection movies={this.props.popularMovies} title="Popular Movies" />
        <MovieBrowseSection movies={this.props.topRatedMovies} title="Top Rated" />
        <MovieBrowseSection movies={this.props.currentMovies} title="Now Playing" />
        <MovieBrowseSection movies={this.props.upcomingMovies} title="Coming Soon" />
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
