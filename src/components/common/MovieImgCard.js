import React from 'react'
import { Col } from 'react-bootstrap'


const MovieImgCard = ({movie}) => {
  return (
    <Col className="movie-thumbnail" lg={2} md={3} sm={4} xs={6} key={movie.id}>
      <img height="250px" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt=""/>
    </Col>
  )
}

export default MovieImgCard
