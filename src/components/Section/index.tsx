import { HTMLAttributes, PropsWithChildren } from "react";

import { joinTruthy } from "@/utils";

import styles from "./style.module.css";

export const Section = ({
    children,
    className,
    ...props
}: PropsWithChildren & HTMLAttributes<HTMLElement>) => {
    return (
        <section className={joinTruthy(styles.root, className)} {...props}>
            {children}
        </section>
    );
};
