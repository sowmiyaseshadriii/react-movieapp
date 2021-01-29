import React from 'react';
import '../App.css';
let backdropIMG;
class MovieRow extends React.Component {
  backdropIMG =`https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path}`;
  addDefaultSrc(ev){
    ev.target.src = './nomovie.jpg';
       }

  viewMovie() {
    window.location.href=`https://www.themoviedb.org/movie/${this.props.movie.id}`
  }
  render(){
      return (  
       <div className="images">
         <ul>
           <li>
           <img onError={this.addDefaultSrc} src={
                `https://image.tmdb.org/t/p/w300_and_h450_bestv2${
                this.props.movie.poster_path}`}  alt="img"  className="image"/>            
               
              <div className="form-group">
                <input type="button" className="btn-block btn btn-success" name="View"
                value="view" onClick={this.viewMovie.bind(this)}/>
              </div>
            
          </li>
        </ul>
     </div>
 
  
     
  
    
    
      );
 
           
    }

}


export default MovieRow;