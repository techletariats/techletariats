import { HTMLAttributes, PropsWithChildren } from "react";

import { joinTruthy } from "@/utils";

import styles from "./style.module.css";

export interface TypographyProps extends PropsWithChildren<
    HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>
> {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export const Typography = ({
    as,
    children,
    className,
    ...props
}: TypographyProps) => {
    const Element = as;

    return (
        <Element className={joinTruthy(styles.root, className)} {...props}>
            {children}
        </Element>
    );
};
