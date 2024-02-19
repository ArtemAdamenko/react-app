import {JSX} from "react";
import {IHeaderProps} from "@/layout/Header/Header.props";

export const Header = ({...props}: IHeaderProps): JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    );
};
