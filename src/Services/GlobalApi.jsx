import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key="d90611de6d3deb64cdd566723013d644"

//const movieByGenreBaseURl='https://api.themoviedb.org/3/discover'

const getTrendingVideos = axios.get(movieBaseUrl +
     "/trending/all/day?api_key=" + api_key);
     const getMovieByGenreId=(id)=>{
        axios.get(movieByGenreBaseURl+"&with_genres="+id)
     }

export default{
    getTrendingVideos,
    getMovieByGenreId
}






//https://api.themoviedb.org/3/movie/550?api_key=d90611de6d3deb64cdd566723013d644
//d90611de6d3deb64cdd566723013d644

//const getTrendingVideos = axios.get( this.movieBaseUrl+
 //   "/trending/all/day?api_key"+api_key);

// const getTrendingVideos = axios.get(this.movieBaseUrl + "/trending/all/day?api_key=" + api_key);
// error ho rhi hai movies base url