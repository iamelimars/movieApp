import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const TopNavBar = () => {
  return (
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
          <NavItem href="/browse/shows">
            Search
          </NavItem> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default TopNavBar
