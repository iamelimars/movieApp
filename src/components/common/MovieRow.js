import React, {Component}  from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';


class MovieRow extends Component {

   rowClicked() {
    console.log(this.props.movie.id)

    this.setState({ show: false })
  }
  render() {
    return (
      <table key={this.props.movie.id} className="movie-search-row" onClick={this.rowClicked.bind(this)} >
        <Link to={`/movie/${this.props.movie.id}`}>
          <tbody>
            <tr>
              <td className="search-image">
                <img src={this.props.movie.poster_src} width="80" alt="poster"/>
              </td>
              <td className="search-info">
                <h4>{this.props.movie.title}</h4>
                <p>{this.props.movie.overview.substr(0, 300)}...</p>
              </td>
            </tr>
          </tbody>
        </Link>
      </table>
    )
  }
}

export default MovieRow
