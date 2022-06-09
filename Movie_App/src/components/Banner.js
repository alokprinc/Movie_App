import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
import {movies} from './getMovies'
import img from '../resources/img.jpg'
export default class Banner extends Component {
  render() {
    let movie = movies.results[0]
    return (
        <>
        {
            
            movie.length == 0?
                <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>:
            <div className="card banner-card" >
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} class="card-img-top banner-img" alt={movie.title}/>
              <div className="card-body">
              <h1 className="card-title banner-title">{movie.original_name}</h1>
              <p className="card-text banner-text">{movie.overview}</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>
        }
      </>
    )
  }
}
