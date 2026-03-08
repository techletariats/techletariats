import { AnchorHTMLAttributes } from 'react';
import styles from 'link.module.css'
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
}

export const Link = ({
  children,
  ...props
}: LinkProps) => {
  return (
    <a
      className={styles.root}
      {...props}
    >
      {children}
    </a>
  );
};
