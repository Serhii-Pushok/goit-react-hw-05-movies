import { CastItem } from "components/CastItem/CastItem";
import css from "./CastInfo.module.css";


export const CastInfo = ({ cast }) => {

    return (
            <ul className={css.castList}>
                {cast.length > 0 && cast.map(item => (
                    <CastItem key={item.id} {...item} />
                ))}
            </ul>  
    )
}

