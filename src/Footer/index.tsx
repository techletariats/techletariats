import { PropsWithChildren } from "react";

import styles from "./style.module.css";

export interface FooterProps extends PropsWithChildren {
    as?: "h1" | "h2" | "h3" | "h4";
}

export const Footer = ({ children, as = "h1", ...props }: FooterProps) => {
    const Tag = as;
    return (
        <Tag className={styles.root} {...props}>
            {children}
        </Tag>
    );
};