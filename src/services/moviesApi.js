import axios from "axios";

export const getTrendingMovies = async (page=1) => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=8866ad978ef0d3b2cbeacd8a73295f85&page=${page}`);
    return data;
}

export const getMovieDetails = async (movie_id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=8866ad978ef0d3b2cbeacd8a73295f85`);
    return data;
}

export const getCastDetails = async (movie_id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=8866ad978ef0d3b2cbeacd8a73295f85`);
    return data;
}

export const getReviewsDetails = async (movie_id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=8866ad978ef0d3b2cbeacd8a73295f85`);
    return data;
}

 export const getSearchMovies = (query) => {
    const {data} = `https://api.themoviedb.org/3/search/movie?api_key=8866ad978ef0d3b2cbeacd8a73295f85&query=${query}`;
    return data;
  }