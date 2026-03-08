import { PropsWithChildren } from "react";

import styles from "./header.module.css";

export interface HeaderProps extends PropsWithChildren {
    as?: "h1" | "h2" | "h3" | "h4";
}

export const Header = ({ children, as = "h1", ...props }: HeaderProps) => {
    const Tag = as;
    return (
        <Tag className={styles.root} {...props}>
            {children}
        </Tag>
    );
};
