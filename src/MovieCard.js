import { useState } from "react";


function MovieCard(props) {

    const [movie, setMovie] = useState({title : "aaaaa" ,description : "aaaaa" ,posterURL : "https://upload.wikimedia.org/wikipedia/en/a/a3/JohnWickSoundtrackCover.jpg" , rating : "aaaaa" })
   
    

    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.posterURL}></img>
        </div>
    );
  }

 // MovieCard.defaultProps = {
  // posterURL : "https://upload.wikimedia.org/wikipedia/en/a/a3/JohnWickSoundtrackCover.jpg",
 // }
  
  export default MovieCard;