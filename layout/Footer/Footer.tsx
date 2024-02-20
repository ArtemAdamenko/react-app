import {JSX} from "react";
import {IFooterProps} from "@/layout/Footer/Footer.props";
import cn from "classnames";
import styles from '@/layout/Footer/Footer.module.css';

export const Footer = ({ className, ...props}: IFooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>
                Footer
            </div>
        </footer>
    );
};
