import { AnchorHTMLAttributes, PropsWithChildren } from "react";

import { joinTruthy } from "@/utils";

import styles from "./style.module.css";

export const Link = ({
    children,
    className,
    ...props
}: PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a className={joinTruthy(styles.root, className)} {...props}>
            {children}
        </a>
    );
};
