import React, {Component} from 'react'
import $ from 'jquery';
import MovieRow from './MovieRow'

class SearchModal extends Component {

  constructor(props, context) {
    super(props, context);

    this.performSearch()

    this.handleClose = this.props.handleClose

    this.state = {
      rows: []
    }

  }

  performSearch(searchTerm) {
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=dfd4beb735b2271820aa9fe51b6fe1cb&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched Data Successfully");
        const results = searchResults.results;
        var movieRows = [];
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow closeModal={this.handleClose} key={movie.id} movie={movie} />
          movieRows.push(movieRow);
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    })
  }

  searchChangeHandler(event) {
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }

  render() {
    return (
      <div>
        <h3 className="search-header">Search Movies & Shows</h3>
        <input className="searchBar" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Search Term"/>
        {this.state.rows}
      </div>
    )
  }
}

export default SearchModal
