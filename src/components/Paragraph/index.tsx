import { Typography, TypographyProps } from "@/components/Typography";

import { joinTruthy } from "@/utils";

import styles from "./style.module.css";

export const Paragraph = ({
    children,
    className,
    ...props
}: Omit<TypographyProps, "as">) => {
    return (
        <Typography
            className={joinTruthy(styles.root, className)}
            as="p"
            {...props}
        >
            {children}
        </Typography>
    );
};
