import {JSX} from "react";
import {ISidebarProps} from "@/layout/Sidebar/Sidebar.props";

export const Sidebar = ({...props}: ISidebarProps): JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    );
};
