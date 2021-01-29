import React, { Component } from 'react';
import './App.css';
import MovieRow from './components/MovieRow';

class App extends Component {
constructor(props){
  super(props);
this.state={
 rows:[]
};

}
componentDidMount(){
  this.getPopularMovies();
}

getPopularMovies(){
  var movieRows=[];
  const urlString=`https://api.themoviedb.org/3/movie/popular?api_key=8a12ed99779d463d641e38a668120ce4`;
  fetch(urlString)
  .then(response => response.json())
  .then(data=>{
       const results=data.results;  
      console.log(results);  
       if(results){
        results.forEach((movie)=>{
         // console.log(movieRows);    
          const movieRow=<MovieRow key={movie.id} movie={movie}/>         
          movieRows.push(movieRow);                
        })   
       }     
      this.setState({
          rows: movieRows
      })
     
  })     
}
performSearch(search){
  var movieRows=[];
  var urlString;
  if(search){
     urlString=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=8a12ed99779d463d641e38a668120ce4`;
  }
  else{
     urlString=`https://api.themoviedb.org/3/movie/popular?api_key=8a12ed99779d463d641e38a668120ce4`;
  }
    fetch(urlString)
     .then(response => response.json())
     .then(data=>{
          const results=data.results;    
        
          if(results){
           results.forEach((movie)=>{
             const movieRow=<MovieRow key={movie.id} movie={movie}/>
             movieRows.push(movieRow);           
           })   
          }     
         this.setState({
             rows: movieRows
         })
     })     
}

searchChangeHandler(event) {
  console.log(event.target.value)
  const boundObject = this
  const searchTerm = event.target.value
  boundObject.performSearch(searchTerm);
}

  render() {
    
    return (
      
      <div>
        <div className="row app">
          <div className="offset-sm-1 col-sm-2 col-4">
            <img src="logo.png" alt="" width="100%" className="img-responsive"/>
          </div>
          <div className="col-sm-6 col-8">
            <p>React Movie Search</p>
            <h6><i>Unlimited movies to Enjoy</i></h6>
          </div>
        </div>
        <div className="row justify-content-center">
           <div className="col-10">            
              <div className="form-group">
                <input type="text" className="form-control" name="search"
                placeholder="Enter Search Term..." onChange={this.searchChangeHandler.bind(this)} />
                </div>
            </div>
        </div>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
