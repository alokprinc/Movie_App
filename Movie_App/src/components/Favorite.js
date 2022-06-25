import React, { Component } from 'react'
import {movies} from './getMovies'

export default class Favorite extends Component {
  render() {
      const movie = movies.results
    return (
      <div>
          <>
          <div className='main'>
                <div className='row'>
                    <div className='col-3'>
                        <ul class="list-group favorite-genres">
                            <li class="list-group-item active">All Genres</li>
                            <li class="list-group-item">Action</li>
                            <li class="list-group-item">Adventure</li>
                            <li class="list-group-item">Fantasy</li>
                            <li class="list-group-item">Romance</li>
                            <li class="list-group-item">Sci-Fi</li>
                        </ul>
                    </div>
                    <div className='col-9 favorites-table'>
                        <div className='row'>
                            <input type="text" className="input-group-text col-6"></input>
                            <input type="number" className="input-group-text col-6"></input>
                        </div>
                        <div className='row'>
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genres</th>
                                    <th scope="col">Popularity</th>
                                    <th scope="col">Rating</th>
                                    </tr>
                                </thead>
                                {
                                    movie.map((movieObj)=>(
                                        <tbody>
                                            <tr>
                                            <td> <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style={{width:'7rem'}}></img> {movieObj.original_title || movieObj.original_name}</td>
                                            <td>{movieObj.media_type} </td>
                                            <td>{movieObj.popularity}</td>
                                            <td> {movieObj.vote_average}</td>
                                            <td> <button type="button" class="btn btn-danger">Delete</button> </td>
                                            </tr>
                                        </tbody>
                                    ))
                                }
                                
                            </table>
                            <div className='row'>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
          </>
      </div>
    )
  }
}
