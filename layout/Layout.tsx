import {FunctionComponent, JSX} from "react";
import {ILayoutProps} from "@/layout/Layout.props";
import {Header} from "@/layout/Header/Header";
import {Sidebar} from "@/layout/Sidebar/Sidebar";
import {Footer} from "@/layout/Footer/Footer";

export const Layout = ({children}: ILayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
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
