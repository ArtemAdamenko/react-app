import { JSX } from "react";
import { IButtonProps } from "@/components/Button/Button.props";
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ children, appearance }: IButtonProps): JSX.Element => {
    return (
        <button
        className={cn(styles.button, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        })}>
            {children}
        </button>
    );
};
