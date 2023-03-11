import { NavLink } from "react-router-dom";
import css from "./MovieInfo.module.css";

export const MovieInfo = ({poster_path, original_title, overview, vote_average, genres = [], release_date }) => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const fileSize = 'w500';
    const URI = `${baseUrl}${fileSize}${poster_path}`;

    let date = new Date(release_date).getFullYear();
    if (Number.isNaN(Number(date))) {
        date = 'No information';
    }

    const voteAverage = ((Number(vote_average).toFixed(1)) * 10) + '%';
    const movieGenres = genres.map(genre => genre.name).join(', ');

    return (
        <div className={css.movieInfo}>
            <div className={css.container}>
                <img src={URI} alt={original_title} className={css.movie__image} />
                <div>
                    <h1 className={css.title}>{original_title} ({date})</h1>
                    <p className={css.text}>User Score : {voteAverage}</p>
                    <h2 className={css.title}>Overview</h2>
                    <p className={css.text}>{overview}</p>
                    <h2 className={css.title}>Genres</h2>
                    <p className={css.text}>{movieGenres}</p>
                </div>
            </div>
            <div>
                <h2 className={css.title}>Additional information</h2>
                <ul className={css.additionalInformationList}>
                    <li>
                        <NavLink to="cast" className={({ isActive }) => `${isActive && css.active} ${css.additionalInformationLink}`}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to="reviews" className={({ isActive }) => `${isActive && css.active} ${css.additionalInformationLink}`}>Reviews</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}