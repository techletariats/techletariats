import { AnchorHTMLAttributes, PropsWithChildren } from "react";

import styles from "./style.module.css";

export const Link = ({
    children,
    ...props
}: PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a className={styles.root} {...props}>
            {children}
        </a>
    );
};
