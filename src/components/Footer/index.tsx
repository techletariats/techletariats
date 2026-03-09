import { Paragraph } from "@/components/Paragraph";

import styles from "./style.module.css";

export const Footer = () => {
    return (
        <footer className={styles.root}>
            <Paragraph>
                Welcome To Techletariats {new Date().getFullYear()}
            </Paragraph>
        </footer>
    );
};
