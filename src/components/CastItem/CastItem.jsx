import css from "./CastItem.module.css";

export const CastItem = ({ character, name, profile_path }) => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const fileSize = 'w500';
    const URI = `${baseUrl}${fileSize}${profile_path}`;

    return (
            <li className={css.castItem}>
                <img src={URI} alt={name} className={css.castItem__image}/>
                <div className={css.castItem__wrapper}>
                    <p className={css.title}>{name}</p>
                    <p className={css.text}>Character: {character}</p>
                </div>
            </li>
    )
}