import {JSX} from "react";
import {IFooterProps} from "@/layout/Footer/Footer.props";

export const Footer = ({...props}: IFooterProps): JSX.Element => {
    return (
        <div {...props}>
            Footer
        </div>
    );
};
