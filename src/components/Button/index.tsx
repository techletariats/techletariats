import { ButtonHTMLAttributes } from "react";

import styles from "./style.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
}

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button type="button" className={styles.root} {...props}>
            {children}
        </button>
    );
};
