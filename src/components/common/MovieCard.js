import React from 'react'
import { Link } from 'react-router-dom'

const cardContent = {
  minWidth: '30%',
  maxWidth: '35%',
  backgroundColor: 'white',
  margin: '25px',
  borderRadius: '10px',
  maxHeight: '300px',
  display: 'flex',
  justifyContent: 'space-between ',
  boxShadow: '3px 3px 56px 9px rgba(128,125,128,0.39)'
}

const cardImg = {
  marginLeft: '-30px',
  marginTop: '-20px ',
  borderRadius: '15px',
  marginBottom: '20px ',
  maxWidth: '185px',
  boxShadow: '3px 3px 56px -2px rgba(128,125,128,0.39)'
}

const cardMain = {
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'flex-start'
  // width: '70%'
}

const MovieCard = ({movie}) => {
  return (
    <div className="card" style={cardContent}>
      <img style={cardImg} src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt=""/>
      <div className="cardMain" style={cardMain}>
        <Link to={`/movie/${movie.id}`}>
          <h3>{movie.title}</h3>
        </Link>
        <h5>{movie.release_date.substr(0,4)} - {movie.vote_average*10}% </h5>
        <p>{movie.overview.substr(0, 150)} ...</p>
        <button>View</button>
      </div>
    </div>
  )
}

export default MovieCard
