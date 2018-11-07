import React, {Component} from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import MovieRow from './MovieRow'
import SearchModal from './SearchModal'



class TopNavBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.performSearch()

    this.state = {
      show: false
    };
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
          const movieRow = <MovieRow key={movie.id} movie={movie} />
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

  handleClose() {
    this.setState({ show: false });
    console.log('closing');
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={"/browse"}>Moo V</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <MenuItem  href="/browse/movies">Browse</MenuItem>
              <MenuItem  href="/browse/movies">Most Popular</MenuItem>
              <MenuItem  href="/browse/movies">Top Rated</MenuItem>
              <MenuItem  href="/browse/movies">Now Playing</MenuItem>
              <MenuItem  href="/browse/movies">Coming Soon</MenuItem>
            </NavDropdown>
            <NavDropdown title="TV Shows" id="basic-nav-dropdown">
              <MenuItem  href="/browse/shows">Browse</MenuItem>
              <MenuItem  href="/browse/shows">Most Popular</MenuItem>
              <MenuItem  href="/browse/shows">Top Rated</MenuItem>
              <MenuItem  href="/browse/shows">Coming Soon</MenuItem>
              <MenuItem  href="/browse/shows">On The Air</MenuItem>
              <MenuItem  href="/browse/shows">Airing Today</MenuItem>
            </NavDropdown>
            <NavItem href="/browse/shows">
              Popular People
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem onClick={this.handleShow}>
              <i className="fas fa-search fa-1.5x"/>
            </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal className="search-modal" bsSize="large" show={this.state.show} onHide={this.handleClose}>
        <div>
          <SearchModal handleClose={this.handleClose} />
        </div>
      </Modal>
    </div>

    )
  }
}

export default TopNavBar
