import React from 'react'
import ShowsImgCard from './ShowsImgCard'

const ShowsBrowseSection = ({shows, title}) => {
  return (
    <div className="home-styles">
      <div className="container">
        <div className="row">
          <h1>{title}</h1>
            {shows.slice(0,12).map((show) => (
              <ShowsImgCard key={show.id} show={show} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ShowsBrowseSection
