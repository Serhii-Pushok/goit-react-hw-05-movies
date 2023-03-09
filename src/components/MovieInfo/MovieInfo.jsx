import css from "./MovieInfo.module.css";

export const MovieInfo = ({poster_path, original_title, }) => {
    const base_url = 'https://image.tmdb.org/t/p/';
    const file_size = 'w500';
    let URI = `${base_url}${file_size}${poster_path}`;

    return (
        <img src={URI} alt={original_title} className={css.movie__image} />
    )
}