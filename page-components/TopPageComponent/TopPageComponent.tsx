import {TopPageComponentProps} from './TopPageComponent.props';
import {Advantages, HhData, Htag, Product, Sort, Tag} from "@/components";
import styles from './TopPageComponent.module.css';
import {TopLevelCategory} from "@/interfaces/page.interface";
import {SortEnum} from "@/components/Sort/Sort.props";
import {useEffect, useReducer} from "react";
import {sortReducer} from "@/page-components/TopPageComponent/sort.reducer";
import {useReducedMotion} from "framer-motion";

export const TopPageComponent = ({firstCategory, page, products}: TopPageComponentProps): JSX.Element => {
    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});
    const setSort = (sort: SortEnum) => {
        dispatchSort({type: sort});
    };

    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        dispatchSort({ type: 'reset', initialState: products});
    }, [products]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag={'h1'}>{page.title}</Htag>
                {products && <Tag color={'grey'} size={'m'} aria-label={products.length + 'elements'}>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
            </div>

            <div role='list'>
                {sortedProducts && sortedProducts.map(p => (<Product role='listitem' layout={!shouldReduceMotion} key={p._id} product={p}/>))}
            </div>

            <div className={styles.hhTitle}>
                <Htag tag={'h2'}>Vacation - {page.category}</Htag>
                <Tag color={'red'} size={'m'}>hh.ru</Tag>
            </div>

            {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag={'h2'}>Advantages</Htag>
                <Advantages advantages={page.advantages}/>
            </>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag={'h2'}>Taking skills</Htag>
            {page.tags.map(t => <Tag key={t} color={'primary'}>{t}</Tag>)}
        </div>
    );
};
