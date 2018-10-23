import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Col className="footer" fluid="true">
      <h3>MOO V</h3>
      <div className="footer-links">
        <Link to="/browse/movies">Home</Link>
        <Link to="/browse/movies">Movies</Link>
        <Link to="/browse/shows">TV Shows</Link>
        <Link to="/browse/movies">Search</Link>
      </div>
      <div className="social-links">

        <a href=""><i className="fab fa-instagram fa-1.5x circle-icon"/></a>
        <a href=""><i className="fas fa-code fa-1.5x circle-icon"/></a>

      </div>


    </Col>
  )
}

export default Footer
