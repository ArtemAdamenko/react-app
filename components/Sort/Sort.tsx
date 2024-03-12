import {SortEnum, SortProps} from './Sort.props';
import styles from './Sort.module.css';
import cn from 'classnames';
import SortIcon from './sort.svg';

export const Sort = ({sort, setSort, className, ...props}: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <div className={styles.sortName} id='sort'>Sort</div>
            <button onClick={() => setSort(SortEnum.Rating)}
                    id='rating'
                    className={cn({
                        [styles.active]: sort === SortEnum.Rating,
                    })}
                    aria-selected={sort === SortEnum.Rating}
                    aria-labelledby='sort rating'
            >
                <SortIcon className={styles.sortIcon}/>By rating
            </button>
            <button onClick={() => setSort(SortEnum.Price)}
                    id='price'
                    className={cn({
                        [styles.active]: sort === SortEnum.Price,
                    })}
                    aria-selected={sort === SortEnum.Price}
            >
                <SortIcon className={styles.sortIcon}/>By price
            </button>
        </div>
    );
};
