import { PropsWithChildren } from "react";

import styles from "./style.module.css";

export const Paragraph = ({ children, ...props }: PropsWithChildren) => {
    return (
        <p className={styles.root} {...props}>
            {children}
        </p>
    );
};
