import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/homeActions';
import HomePage from '../components/HomePage';


class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.themoviedb.org/3/movie/popular?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&language=en-US&page=1')
  }

  render() {

    if (this.props.hasErrors) {
      return (
        <h1>404. Sorry We're having issues connecting</h1>
      )
    }

    if (this.props.isLoading) {
      return (
        <h1>Loading...</h1>
      )
    }

    return(
      <div>
        <HomePage headerMovie={this.props.posts[0]} movies={this.props.posts} />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    hasErrors: state.postsHaveErrors,
    isLoading: state.postsAreLoading
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchPosts(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
