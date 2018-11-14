import React from 'react'
import { Col } from 'react-bootstrap'


const ShowsImgCard = ({show}) => {
  return (
    <Col className="movie-thumbnail" lg={2} md={3} sm={4} xs={6}>
      <img height="250px" src={`https://image.tmdb.org/t/p/w300${show.poster_path}`} alt=""/>
    </Col>
  )
}

export default ShowsImgCard
