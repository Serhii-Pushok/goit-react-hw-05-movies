import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { SearchForm } from "components/SearchForm/SearchForm";
import { getSearchMovies } from "services/moviesApi";
import { Loader } from "components/Loader/Loader";
import { MovieGallery } from "components/MovieGallery/MovieGallery";
import css from "./Movies.module.css";

export const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(false);
  
  const query = searchParams.get("query");

  useEffect(() => {
      const getMoviesBySearch = async () => {
      setIsLoading(true);

      try {
        const { results } = await getSearchMovies(query);
          setSearchMovies(results);
          
      } catch (error) {
      setError(error.message);
      
      }
      finally {
          setIsLoading(false)
      }
      }
  
      getMoviesBySearch();
  }, [query])
  

  const handleFormSubmit = value => {
      setSearchParams({query: value})
  }

    
  return (
         <div className={css.container}>
            <SearchForm onSubmit={handleFormSubmit} />
            
            {isLoading && <Loader />}
            
            {searchMovies.length > 0 && <MovieGallery movies={searchMovies} />}
      
            <ToastContainer autoClose={3000}/>
          </div>
    )
}