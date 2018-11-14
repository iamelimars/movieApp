import React, {Component} from 'react'
import { Navbar, Nav, NavItem, NavDropdown, Modal, Col } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import $ from 'jquery';
import { connect } from 'react-redux';
import { openSearchModal, closeSearchModal } from '../../actions/navbarActions';




class TopNavBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClose = this.handleClose
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
          // const movieRow = <MovieRow closeModal={this.handleClose} key={movie.id} movie={movie} />
          const movieRow = <div key={movie.id} className="movie-search-row" onClick={this.handleClose} >
                            <Link to={`/movie/${movie.id}`}>
                                <div className="row">
                                  <Col sm={2} xs={4} className="search-image">
                                    <img src={movie.poster_src} width="80" alt="poster"/>
                                  </Col>
                                  <Col sm={10} xs={8} className="search-info">
                                    <h4>{movie.title}</h4>
                                    <p className="">{movie.overview.substr(0, 300)}...</p>
                                  </Col>
                                </div>
                            </Link>
                          </div>
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
    this.props.closeModal()
    this.setState({ show: false });
    console.log('closing');

  }

  handleShow() {
    this.props.openModal()

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
              <li><NavLink to="/browse/movies">Browse</NavLink></li>
              <li><NavLink to="/movies/popular">Most Popular</NavLink></li>
              <li><NavLink to="/movies/toprated">Top Rated</NavLink></li>
              <li><NavLink to="/movies/nowplaying">Now Playing</NavLink></li>
              <li><NavLink to="/movies/comingsoon">Coming Soon</NavLink></li>
            </NavDropdown>
            <NavDropdown title="TV Shows" id="basic-nav-dropdown">
              <li><NavLink to="/browse/shows">Browse</NavLink></li>
              <li><NavLink to="/browse/shows">Most Popular</NavLink></li>
              <li><NavLink to="/browse/shows">Top Rated</NavLink></li>
              <li><NavLink to="/browse/shows">Coming Soon</NavLink></li>
              <li><NavLink to="/browse/shows">On The Air</NavLink></li>
              <li><NavLink to="/browse/shows">Airing Today</NavLink></li>
            </NavDropdown>
            <li><NavLink to="/browse/shows">People</NavLink></li>
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
          <h3 className="search-header">Search Movies & Shows</h3>
          <input className="searchBar" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Search Term" autoFocus/>
          {this.state.rows}
          {/* <SearchModal handleClose={this.handleClose} /> */}
        </div>
      </Modal>
    </div>

    )
  }
}


const mapStateToProps = (state) => {
  return {
    isOpen: state.isOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch(openSearchModal()),
    closeModal: () => dispatch(closeSearchModal())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(TopNavBar)
