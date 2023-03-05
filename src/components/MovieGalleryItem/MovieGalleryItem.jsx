import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import css from './MovieGalleryItem.module.css';

export const MovieGalleryItem = ({ poster_path, original_title, id }) => {
    const base_url = 'https://image.tmdb.org/t/p/';
    const file_size = 'w500';
    let URI = `${base_url}${file_size}${poster_path}`;

    return <li className={css.movieGalleryItem}>
            <Link to={`movies/${id}`}>
                <img src={URI} alt={original_title} className={css.movieGalleryItem__image}/>
            </Link>
        </li>
}


MovieGalleryItem.propTypes = {
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}