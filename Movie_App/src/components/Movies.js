import React, { Component } from 'react'
import {movies} from './getMovies'
import axios from 'axios';
import { hover } from '@testing-library/user-event/dist/hover';
export default class Movies extends Component {
  constructor(){
    super();
    this.state={
      hover:'',
      pages:[1]
    }
  }
  render() {
      let movie = movies.results
    return (
      <>
      {
          movie.length == 0?
          <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
          </div>:
        <div>
            <h3 className='text-center'><strong>Trending</strong></h3>
           <div className='movies-list'>
             {
               movie.map((movieObj)=>(
                <div className="card movies-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})}>
                <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} class="card-img-top movie-img" alt={movie.title}/>
                {/* <div className="card-body"> */}
                  <h3 className="card-title movies-title">{movieObj.original_title}</h3>
                  <h3 className="card-title movies-title">{movieObj.original_name}</h3>
                  {/* <p className="card-text movies-text">{movieObj.overview}</p> */}
                  <div className="button-wrapper" style={{display:'flex',width:'100%' ,justifyContent:'center'}}>
                    {
                      this.state.hover == movieObj.id && <a href="#" className="btn btn-primary movies-button">Add To Favorite</a>
                    }
                    
                  </div>
              </div>
               ))
             }
           </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    {
                      this.state.pages.map((value)=>(
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                      ))
                    }
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
        </div>
      }
      </>
    )
  }
}
