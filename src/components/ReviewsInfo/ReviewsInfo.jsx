import { ReviewsItem } from "components/ReviewsItem/ReviewsItem";
import css from "./ReviewsInfo.module.css";


export const ReviewsInfo = ({ reviews }) => {

    return (
            <ul className={css.reviewInfoList}>
                {reviews.length > 0 && reviews.map(review => (
                    <ReviewsItem key={review.id} {...review} />
                ))}
            </ul> 
    )
}