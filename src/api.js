import axios from "axios";

axios.defaults.headers.common["Authorization"] = "";

export const fetchMovies = async function(){
    const api_Link = "https://api.themoviedb.org/3/movie/popular?api_key=9277099f9f5465817ad930d391534da0&language=en-US&page=1";
    const get_data = await axios.get(api_Link);
    
    return get_data.data;
}