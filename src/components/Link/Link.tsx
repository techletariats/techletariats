import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import styles from './link.module.css'

export const Link = ({
  children,
  ...props
}: PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className={styles.root}
      {...props}
    >
      {children}
    </a>
  );
};
