import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "services/moviesApi";
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from "components/MovieInfo/MovieInfo";

export const MovieDetails = () => {

  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(false);


  useEffect(() => {
      const getMovie = async () => {
      setIsLoading(true);

      try {
        const data = await getMovieDetails(movieId);

        setMovie(data);
          
      } catch (error) {
      setError(error.message);
      
      }
      finally {
          setIsLoading(false)
      }
      }
  
      getMovie();
  }, [movieId, setError])

    return (
         <main>
          {isLoading && <Loader />}
          {movie && <MovieInfo {...movie} />}
        </main>
    )
}