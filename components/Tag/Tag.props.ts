import {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode;
    size: 's' | 'm';
    color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: string;
}
