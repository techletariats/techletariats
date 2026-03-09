import { HTMLAttributes, PropsWithChildren } from "react";

import styles from "./style.module.css";

export const Section = ({
    children,
    ...props
}: PropsWithChildren & HTMLAttributes<HTMLElement>) => {
    return (
        <section className={styles.root} {...props}>
            {children}
        </section>
    );
};
