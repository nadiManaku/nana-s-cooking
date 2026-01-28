'use client';

import { Recipe } from "@/types/types";
import styles from './recepie.module.scss';
import { Icon } from "../Icon/Icon";

export default function RecepieDetail({
    resepieDetailsData,
    loading
}: {
    resepieDetailsData: Recipe,
    loading: boolean
}) {

    if (loading) {
        return (
            <div className="spinner">
                 <Icon name="loader" />
            </div>
        )
    }

    /*if (error) {
        return (
            <div className="error">
                <div>
                    <svg>
                        <use href="src/img/icons.svg#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>No recipes found for your query. Please try again!</p>
            </div>
        )
    }*/

    const isEmptyObject = (obj:any) => Object.keys(obj).length === 0;

    if (isEmptyObject(resepieDetailsData)) {
        return (
            <div className="message">
                <div>
                    <Icon name="smile" />
                </div>
                <p>Start by searching for a recipe or an ingredient. Have fun!</p>
            </div>
        )
    }
    return (
        <div className={styles.recipe}>
            <figure className={styles.recipe__fig}>
                <img src={resepieDetailsData?.image_url} alt="Tomato" className={styles.recipe__img} />
                <h1 className={styles.recipe__title}>
                    <span>{resepieDetailsData.title}</span>
                </h1>
            </figure>

            <div className={styles.recipe__details}>
                <div className={styles.recipe__info}>
                    <Icon name="clock" className={styles['recipe__info-icon']} size={10} />
                    <span className={[styles['recipe__info-data'], styles['recipe__info-dataMinutes']].join(' ')}>{resepieDetailsData.cooking_time}</span>
                    <span className={styles.recipe__infoText}>minutes</span>
                </div>
                <div className={styles.recipe__info}>
                    <Icon name="users" className={styles['recipe__info-icon']} />
                    <span className={[styles['recipe__info-data'], styles['recipe__info-dataPeople']].join(' ')}>{resepieDetailsData.servings}</span>
                    <span className={styles['recipe__info-text']}>servings</span>
                    <div className={styles['recipe__info-buttons']}>
                        <button className="btn--tiny">
                            <Icon name="minus-circle" />
                        </button>
                        <button className="btn--tiny">
                            <Icon name="plus-circle" />
                        </button>
                    </div>
                </div>

                <div className={[styles['recipe__user-generated'], styles['hidden']].join(' ')}>
                    <Icon name="icon-user" />
                </div>
                <button className="btn--round">
                    <Icon name="bookmark-fill" />
                </button>
            </div>

            <div className={styles.recipe__ingredients}>
                <h2 className="heading--2">Recipe ingredients</h2>
                <ul className={styles['recipe__ingredient-list']}>
                    {resepieDetailsData.ingredients?.map((ingredient, index) => (
                        <li key={index} className={styles.recipe__ingredient}>
                            <Icon name="check" className={styles.recipe__icon} />
                            <div className={styles.recipe__quantity}>{ingredient.quantity || ''}</div>
                            <div className={styles.recipe__description}>
                                <span className={styles.recipe__unit}>{ingredient.unit}</span>
                                {ingredient.description}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.recipe__directions}>
                <h2 className="heading--2">How to cook it</h2>
                <p className={styles['recipe__directions-text']}>
                    This recipe was carefully designed and tested by
                    <span className={styles.recipe__publisher}> {resepieDetailsData.publisher}</span>. Please check out
                    directions at their website.
                </p>
            </div>
        </div >
    )
}