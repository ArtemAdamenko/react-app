import {FunctionComponent, JSX} from "react";
import {ILayoutProps} from "@/layout/Layout.props";
import {Header} from "@/layout/Header/Header";
import {Sidebar} from "@/layout/Sidebar/Sidebar";
import {Footer} from "@/layout/Footer/Footer";
import styles from '@/layout/Layout.module.css';

export const Layout = ({children}: ILayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}
