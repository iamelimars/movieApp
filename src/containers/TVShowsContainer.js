import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllShows } from '../actions/showsActions'
import ShowsBrowseSection from '../components/common/ShowsBrowseSection'


class TVShowsContainer extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.fetchAllShows().then(() => {
      console.log(this.props.popularShows);
      console.log(this.props.topRatedShows);
      console.log(this.props.onTheAirShows);
      console.log(this.props.airingTodayShows);
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
          <ShowsBrowseSection shows={this.props.popularShows} title="Popular Shows" />
          <ShowsBrowseSection shows={this.props.topRatedShows} title="Top Rated Shows" />
          <ShowsBrowseSection shows={this.props.onTheAirShows} title="Shows On The Air" />
          <ShowsBrowseSection shows={this.props.airingTodayShows} title="Shows Airing Today" />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hasErrors: state.hasErrors,
    showsAreLoading: state.showsAreLoading,
    popularShows: state.popularShows,
    topRatedShows: state.topRatedShows,
    onTheAirShows: state.onTheAirShows,
    airingTodayShows: state.airingTodayShows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllShows: () => dispatch(getAllShows())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TVShowsContainer);
