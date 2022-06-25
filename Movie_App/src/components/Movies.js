import React, { Component } from 'react'
// import {movies} from './getMovies'
import axios from 'axios';
import { hover } from '@testing-library/user-event/dist/hover';

export default class Movies extends Component {
  constructor(){
    super();
    console.log("constructor")
    this.state={
      hover:'',
      pages:[1],
      currPage:1,
      movies:[],
    }
  }
  async componentDidMount(){
    //side effects 
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=f63939183c4047ef43886b40a47ce3bc&language=en&page=${this.state.currPage}`)
    let data = res.data
    this.setState({
      movies:[...data.results]
    })
  }
  changeMovies=async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=f63939183c4047ef43886b40a47ce3bc&language=en&page=${this.state.currPage}`)
    let data = res.data
    this.setState({
      movies:[...data.results]
    })
  }
  handleNext=()=>{
    let temp=[]
    for(let i = 1; i <= this.state.pages.length+1;i++){
      temp.push(i);
    }
    this.setState({
      pages:[...temp],
      currPage:this.state.currPage+1
    },this.changeMovies)
    
  }
  handlePrev=()=>{
    if(this.state.currPage!=1){
      // this.state.pages.pop();
    this.setState({
      
      currPage:this.state.currPage-1
    },this.changeMovies)
  }
  }
  handleNumButton=(value)=>{
    if(value != this.state.currPage){
      this.setState({
        currPage:value
      },this.changeMovies)
    }
  }
  render() {
   
    return (
      <>
      {
          this.state.movies.length == 0?
          <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
          </div>:
        <div>
            <h3 className='text-center'><strong>Trending</strong></h3>
           <div className='movies-list'>
             {
               this.state.movies.map((movieObj)=>(
                <div className="card movies-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})}>
                <img src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} class="card-img-top movie-img" alt={this.state.movies.title}/>
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
                    <li class="page-item"><a class="page-link" onClick={this.handlePrev}>Previous</a></li>
                    {
                      this.state.pages.map((value)=>(
                        <li class="page-item"><a class="page-link" onClick={()=>this.handleNumButton(value)}>{value}</a></li>
                      ))
                    }
                    <li class="page-item"><a class="page-link" onClick={this.handleNext}>Next</a></li>
                  </ul>
                </nav>
              </div>
        </div>
      }
      </>
    )
  }
}
