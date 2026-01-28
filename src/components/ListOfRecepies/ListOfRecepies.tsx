import { Recipe } from '@/types/types';
import styles from './listOfRecepies.module.scss';
import { Span } from 'next/dist/trace';

export default function ListOfRecepies({
    items,
    loading,
    onSelect,
    query,
    selectedItemId
}: {
    items: Recipe[],
    loading: boolean,
    onSelect: (id: string) => void,
    query: string,
    selectedItemId: string
}) {

    console.log('Selected Item in ListOfRecepies:', selectedItemId);

    if (loading) {
        return <h2>Loading ...</h2>;
    }

    if (items.length === 0 && query !== '') {
        return (
            <div className="message">
                <p>No results found for {query}. Please try again!</p>
            </div>
        )
    }

    return (
        <div className={styles['search-results']}>
            <ul className={styles.results}>
                {items && items.map((recipe) => (
                    <li key={recipe.id} className={styles.preview}>
                        <button className={selectedItemId === recipe.id ? [styles['preview__link--active'], styles['preview__link']].join(' ') : styles['preview__link']} onClick={() => onSelect(recipe.id)}>
                            <figure className={styles.preview__fig}>
                                <img src={recipe.image_url} alt={recipe.title} />
                            </figure>
                            <div className={styles.preview__data}>
                                <h4 className={styles.preview__title}>{recipe.title}</h4>
                                <p className={styles.preview__publisher}>{recipe.publisher}</p>
                            </div>
                        </button>
                    </li>
                ))}
            </ul>

            <div className={styles.pagination}>
                {/** Here comes dynamic code */}
                <button className={[`btn--inline`, styles.pagination__btnPrev].join(' ')}>
                    <svg className={styles.search__icon}>
                        <use href="src/img/icons.svg#icon-arrow-left"></use>
                    </svg>
                    <span>Page 1</span>
                </button>
                <button className={[`btn--inline`, styles.pagination__btnNext].join(' ')}>
                    <span>Page 3</span>
                    <svg className={styles.search__icon}>
                        <use href="src/img/icons.svg#icon-arrow-right"></use>
                    </svg>
                </button>
            </div>
        </div>
    )
}