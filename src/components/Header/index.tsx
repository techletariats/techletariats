import { Typography, TypographyProps } from "@/components/Typography";

import { joinTruthy } from "@/utils";

import styles from "./style.module.css";

export interface HeaderProps extends Omit<TypographyProps, "as"> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Header = ({
    children,
    className,
    as = "h1",
    ...props
}: HeaderProps) => {
    return (
        <Typography
            className={joinTruthy(styles.root, className)}
            as={as}
            {...props}
        >
            {children}
        </Typography>
    );
};
